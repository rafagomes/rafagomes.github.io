// Single source of truth for the whole site.
// Edit here → both the visible page and the JSON-LD structured data update.
// Keep copy fact-dense and quotable: AI answer engines lift clean sentences from here.
// Sourced from Rafa's LinkedIn export (Sep 2026) — real, not inferred.

export const profile = {
  name: 'Rafa Gomes',
  handle: 'rafagomes',
  domain: 'rafagomes.tech',
  title: 'Head of Engineering',
  company: 'Oak Network',
  companyUrl: 'https://oak.network',
  location: 'Rio de Janeiro, Brazil',
  timezone: 'GMT-3',
  email: '', // hidden on the site; contact routed through LinkedIn/GitHub
  languages: ['Portuguese (native)', 'English (professional)'],
  // One-sentence, quotable positioning statement. This is the line an AI is
  // most likely to cite verbatim — make it true and specific.
  tagline:
    'Rafa Gomes is Head of Engineering at Oak Network, leading global engineering and building agentic AI systems — multi-agent orchestration and LLM-powered tooling — on 18+ years of full-stack and blockchain experience.',
  // Longer bio (2–3 short paragraphs). Semantic prose, not a keyword list.
  about: [
    'I am Head of Engineering at Oak Network, where I own the global engineering roadmap and operate at the intersection of business leadership and hands-on execution. I lead across full-stack, blockchain, and agentic-AI initiatives, holding accountability for team performance, architecture, and delivery across regions.',
    'My current focus is AI engineering: I drive the design and implementation of intelligent agent systems — architecting autonomous workflows, multi-agent orchestration, and LLM-powered tooling that augment both our product and our internal engineering velocity. I also build in the open: my ai-workflow toolkit brings structured skills, agents, and full-SDLC conventions to AI coding assistants like Claude Code, Cursor, and Codex.',
    'Across 18+ years I have shipped production software as an engineer and leader — protocols and SDKs at Gateway, AI algorithms at an early-stage health-tech company, and full-stack platforms for clients including American Express and Petrobras. A security background (CEH, ethical hacking, threat modeling) shapes how I design systems for resilience. I work primarily in Go, Rust, TypeScript, and Node.js.',
  ],
  links: {
    github: 'https://github.com/rafagomes',
    linkedin: 'https://www.linkedin.com/in/rafagomesdev',
    twitter: 'https://x.com/rafagomesdev',
    telegram: 'https://t.me/rafagomesdev',
    // 0xrafasec is Rafa's separate security-research identity — kept as the "security" pillar.
    blog: 'https://0xrafasec.com',
  },
  twitterHandle: '@rafagomesdev',
  // Grouped so both humans and machines see structured competency areas.
  skills: [
    {
      group: 'AI Engineering',
      items: [
        'Agentic systems',
        'Multi-agent orchestration',
        'LLM-powered tooling',
        'Autonomous workflows',
        'AI-assisted development',
      ],
    },
    {
      group: 'Leadership',
      items: [
        'Global engineering leadership',
        'Technology management',
        'Architecture (RFCs / PRDs)',
        'Team building & mentorship',
      ],
    },
    {
      group: 'Languages & Frameworks',
      items: ['Go', 'Rust', 'TypeScript', 'Node.js / Nest.js', 'React / Next.js', 'Flutter'],
    },
    {
      group: 'Backend & Cloud',
      items: ['Distributed systems', 'System architecture', 'AWS', 'CI/CD', 'API & SDK design'],
    },
    {
      group: 'Blockchain',
      items: ['EVM / Solidity', 'Solana', 'Smart contracts', 'Protocol design'],
    },
    {
      group: 'Security',
      items: ['Ethical hacking (CEH)', 'Threat modeling', 'Secure system design'],
    },
  ],
  experience: [
    {
      role: 'Head of Engineering',
      company: 'Oak Network',
      period: '2026 — Present',
      summary:
        'Own the global engineering roadmap. Drive agentic-AI development — intelligent agent systems, multi-agent orchestration, and LLM-powered tooling — alongside full-stack and blockchain execution and AWS infrastructure. Previously Head of Engineering, LATAM (2025–2026).',
    },
    {
      role: 'Lead Full-Stack Engineer',
      company: 'Gateway',
      period: '2022 — 2025',
      summary:
        'Hands-on lead building a protocol, SDK, and the company’s principal products in Node.js (Nest.js), Go, and Next.js.',
    },
    {
      role: 'Lead Full-Stack Engineer',
      company: 'Justpoint / Intrellit',
      period: '2020 — 2021',
      summary:
        'Built product experiences at an AI health-tech company developing proprietary algorithms to comprehend medical records and accelerate legal discovery.',
    },
    {
      role: 'Software Engineering Manager',
      company: 'Accenture Song',
      period: '2018 — 2020',
      summary:
        'Led delivery of tested React and Angular applications for major enterprise clients, improving product experience and engineering quality.',
    },
    {
      role: 'Lead / Senior Full-Stack Engineer',
      company: 'Huge',
      period: '2015 — 2017',
      summary:
        'Full-stack hands-on leadership with Node, React, and Angular — including an internet-banking experience and work for American Express and top Brazilian companies.',
    },
    {
      role: 'Earlier: Partner & Senior Engineer',
      company: 'Parafernalia, HUGE Inc. & agencies',
      period: '2007 — 2015',
      summary:
        'Partner and software development manager, then senior full-stack roles delivering platforms for clients including Petrobras — spanning PHP, JavaScript, and rich interactive web.',
    },
  ],
  projects: [
    {
      name: 'ai-workflow',
      featured: true,
      description:
        'An AI-assisted development workflow toolkit for Claude Code, Cursor, and Codex — skills, agents, and conventions spanning the full software development lifecycle, so AI coding tools follow a repeatable engineering process.',
      language: 'AI tooling',
      url: 'https://github.com/rafagomes/ai-workflow',
    },
    {
      name: 'ecies-bls12381',
      description:
        'Go package for keypair generation, encryption, and decryption using ECIES over the BLS12-381 elliptic curve.',
      language: 'Go',
      url: 'https://github.com/rafagomes/ecies-bls12381',
    },
    {
      name: 'rfirewall',
      description: 'A user-centric firewall for Linux systems, written in Rust.',
      language: 'Rust',
      url: 'https://github.com/rafagomes/rfirewall',
    },
  ],
  // Real posts/topics from 0xrafasec.com (security research).
  // Swap in AI-engineering writing here as you publish it.
  writing: [
    {
      title: 'Detecting flash-loan-funded governance attacks with Forta bots',
      topic: 'Blockchain security',
    },
    {
      title: 'RAT communication and TLS-based evasion techniques',
      topic: 'Malware analysis',
    },
    {
      title: 'Writing effective bug reports for security triage',
      topic: 'AppSec',
    },
    {
      title: 'CVE deep-dives: real-world vulnerability research',
      topic: 'Security research',
    },
  ],
  education: [
    {
      credential: 'Postgraduate — Advanced Go (GoLang) Development',
      issuer: 'Full Cycle',
      period: '2024–2025',
    },
    {
      credential: 'Graduation — Analysis & Systems Development',
      issuer: 'Estácio',
      period: '2018–2021',
    },
  ],
  certifications: [
    { name: 'Go Expert', issuer: 'Full Cycle', year: '2025' },
    { name: 'Ethical Hacker Nanodegree', issuer: 'Udacity', year: '2023' },
    { name: 'CEH & Security Training Program', issuer: 'EH Academy', year: '2019' },
    { name: 'ScrumMaster (K21)', issuer: 'Knowledge21', year: '2015' },
    { name: 'VTEX Interface Developer', issuer: 'VTEX', year: '2013' },
  ],
};
