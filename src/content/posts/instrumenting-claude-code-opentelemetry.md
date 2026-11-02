---
title: "We instrumented Claude Code for our team. Here's what the data showed"
description: "How we measured Claude Code with OpenTelemetry, Prometheus, Loki and Grafana, and what cost per developer and per skill revealed about AI coding."
summary: "AI coding only started paying off for my team when we stopped treating it as a tool everyone uses their own way and started treating it as a process we could measure."
publishedAt: 2026-11-02
tags: ["Claude Code", "OpenTelemetry", "AI engineering", "Spec-driven development", "Engineering leadership"]
---

That took two changes. First, we moved from ad hoc prompting to a spec-driven workflow, where agents build from written specs and a separate agent reviews the work. Second, we instrumented every Claude Code session with OpenTelemetry and built our own dashboards for cost and usage, with no SaaS involved.

This post covers both: the workflow, the telemetry stack, the design decisions that mattered, and what the data told us that we did not know before.

## TL;DR

- Generic AI usage made output depend on who was typing, and nobody could say what it cost.
- Spec-driven delivery gave agents real context and split the writer from the reviewer.
- Claude Code already emits OpenTelemetry. An OTel Collector, Prometheus, Loki and Grafana were enough to see cost per developer, team and skill.
- Measure cost, not tokens. Don't capture prompts.
- The data exposed concentrated spend, uneven adoption, and expensive skills we could fix.

## Phase 1: generic AI

Every engineer had an AI coding assistant, and every engineer used it differently.

Some wrote long prompts, some pasted a ticket and hoped. Agents guessed at context the codebase never gave them. The same task could come back clean from one person and half-broken from another, and reviews caught the difference late.

The bigger problem was that we were flying blind. We could not answer basic questions:

- Who is actually using this, and for what?
- What does it cost, per person or per feature?
- Is it making us faster, or just busier?

Without a shared process there was nothing to improve, and without data there was nothing to measure. So we fixed the process first.

## Phase 2: spec-driven, not prompt-driven

The core idea is simple: documents flow downstream, so agents implement with full context instead of guessing. I packaged the process we use as an open-source Claude Code plugin, [ai-workflow](https://github.com/rafagomes/ai-workflow).

A feature moves through five stages:

1. **Plan.** A PRD, the architecture, an optional threat model and ADRs, then a roadmap. Each feature becomes a spec with explicit verification criteria. Specs that grow past roughly 500 source lines get sliced.
2. **Design (optional).** Screens are designed, and the running UI is later verified against them.
3. **Build.** One agent implements one spec slice, with tests. Bugs get a root-cause diagnosis before a fix.
4. **Ship.** Changes are split into conventional commits and opened as a draft PR.
5. **Review.** A separate reviewer agent checks the PR before it is marked ready, and a human merges.

The reviewer is the part that changed quality the most. It runs in a fresh context, read-only, on a stronger model than the writers. It reviews the diff against the spec for compliance, correctness, boundary security, test quality and convention drift. It runs the project's checks itself and returns `PASS` or `FIX_REQUIRED`, with findings graded `HIGH`, `MED` or `LOW`.

The loop has hard limits so it cannot spin forever:

- `HIGH` and `MED` findings get fixed; `LOW` findings are listed but never block.
- At most two re-review cycles. If the loop does not converge, the PR stays a draft for a human.
- Security-sensitive diffs also get a dedicated security review first.

The principle behind it: **the writer never grades its own work.** An agent reviewing code it just wrote, in the same context, tends to agree with itself.

A few conventions hold it together: trunk-based development with short-lived branches, one PR per concern, spec before implementation, and verification before anyone claims a task is done.

## Phase 3: telemetry, no SaaS

Claude Code already emits OpenTelemetry natively, so we did not need a third-party product to see how AI was being used. We needed a collector, two stores and Grafana.

![Telemetry pipeline: Claude Code and Codex CLI send OTLP to an OTel Collector. The collector routes metrics to Prometheus and events to Loki, Grafana Alloy ships pod logs to Loki, and Grafana reads both stores.](/images/writing/ai-coding-telemetry.svg)

Sessions send metrics and events over OTLP to a collector, which splits metrics into Prometheus and events into Loki; Grafana reads both.

| Layer | Component | Role |
| --- | --- | --- |
| Emitter | Claude Code (native OpenTelemetry) | Exports metrics and events per developer |
| Collection | OTel Collector (contrib) | Receives OTLP, drops session-level labels, routes to storage |
| Metrics | Prometheus | Stores usage and cost metrics |
| Logs | Loki | Stores activity events and pod logs |
| Pod logs | Grafana Alloy | Ships container logs to Loki |
| Visualization | Grafana | Developer Analytics and Developer Detail dashboards |

How it runs:

- **Activation lives in the repo.** `CLAUDE_CODE_ENABLE_TELEMETRY=1` and the OTLP endpoint sit in a versioned `.claude/settings.json`. Anyone who opens a session in the repo exports by default, with nothing to install.
- **Private by design.** Access goes through a Tailscale ingress, with no public load balancer. The tailnet is the authentication boundary.
- **GitOps.** Everything deploys with Argo CD and Helm into its own namespace on our Kubernetes cluster.
- **Secrets stay out of manifests.** External Secrets Operator pulls them from the cloud secrets manager.

The running cost is a few small pods and some disk. Dashboards slice the data per developer, per team, per skill and by cost.

## Design decisions that mattered

The stack itself is standard. These choices are what made the data trustworthy.

**Measure cost, not tokens.** Raw token counts look impressive and mean little. The vast majority of tokens in an agentic session are cache reads, which are cheap. A developer with a huge token count can be cheaper than one with a modest count. Cost is the metric that tracks real usage, so every dashboard leads with it.

**Estimate plan limits from cost.** Claude Code does not export how close a user is to their plan limit. We use cost as a proxy, calibrated against a reading from the status bar. It is an approximation, it drifts near the reset window, and the dashboard says so. A labelled estimate beats no signal.

**Control cardinality early.** Each session carries its own instance id. Left alone, every new session would create a new time series in Prometheus. The collector drops `service.instance.id` before export, so series count grows with people and skills, not with sessions.

**Don't capture prompt content.** OpenTelemetry can carry prompts. We chose not to. Capturing what engineers type into an AI assistant is an HR and legal decision, not a config toggle, and we treated it that way. Metrics and activity events were enough to answer every question we had.

**Keep it vendor-neutral.** Codex CLI sends to the same collector. It emits mostly events rather than metrics, so its data lands in Loki instead of Prometheus. The same pipeline can absorb other agents as the team's tooling changes.

## What the data showed

The dashboards answered questions we had only been guessing at.

- **Spend was concentrated.** A few people and a few task types drove most of the cost. That is not bad by itself, but now we knew where to look.
- **Adoption was uneven.** Some engineers barely used the assistant at all. Without data, we would have assumed everyone was on board.
- **Vague tasks burn money.** Work that started without a spec produced retries, rework and long sessions. The cost showed up in the data before it showed up in review.
- **Specs cut the cost per task.** Once the spec-driven workflow was in place, the same kind of work got cheaper. Context up front is cheaper than correction later.
- **Some skills were cost hogs.** Per-skill dashboards made it obvious. Our scraping skills were the worst offenders. We reworked them and brought their cost down.

## What changed

- Faster PRs, because reviews start from a diff that already passed an agent review against the spec.
- Less rework, because agents stop guessing at context.
- More delivered per engineer, with the same team.
- AI spend became something we plan and budget, not a surprise on the invoice.

None of this came from a better model. It came from giving the models a process, and giving ourselves a way to see what they were doing.

## How to start on your team

You do not need our exact setup. The order matters more than the tools.

1. **Write specs before prompts.** Even a one-page spec with verification criteria changes what an agent produces.
2. **Split the writer from the reviewer.** A second agent in a fresh context, reviewing against the spec, catches what the first one talks itself out of.
3. **Turn on Claude Code telemetry in the repo.** Set `CLAUDE_CODE_ENABLE_TELEMETRY=1` and the OTLP endpoint in a versioned `.claude/settings.json`, so every session exports by default.
4. **Start with cost per developer and per skill.** Those two views surface most of the problems.
5. **Decide on prompt capture with HR and legal, not in a config file.**

The workflow is open source: [rafagomes/ai-workflow](https://github.com/rafagomes/ai-workflow). If you are measuring AI coding on your team in a different way, I would like to hear how.
