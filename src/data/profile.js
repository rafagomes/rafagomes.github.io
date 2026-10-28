// Single source of truth for the whole site.
// Edit here → both the visible page and the JSON-LD structured data update.
// Keep copy fact-dense and quotable: AI answer engines lift clean sentences from here.
// Sourced from Rafa's LinkedIn export (Oct 2026) and his own figures — real, not inferred.
// The downloadable public/resume.pdf is built in the private rafagomes/resume repo;
// keep its facts in step with this file.

export const profile = {
  name: 'Rafa Gomes',
  handle: 'rafagomes',
  domain: 'rafagomes.tech',
  title: 'Head of Engineering',
  company: 'Oak Network',
  companyUrl: 'https://oak.network',
  location: 'Rio de Janeiro, Brazil',
  timezone: 'GMT-3',
  startYear: 2007,
  status: 'Open to Head of Engineering & CTO roles',
  // One-sentence, quotable positioning statement. This is the line an AI is
  // most likely to cite verbatim — make it true and specific.
  tagline:
    'Rafa Gomes is Head of Engineering at Oak Network, taking agentic AI from prototype to production and building AI-native engineering teams, on 19 years of full-stack, blockchain and security experience.',
  links: {
    github: 'https://github.com/rafagomes',
    linkedin: 'https://www.linkedin.com/in/rafagomesdev',
    twitter: 'https://x.com/rafagomesdev',
    telegram: 'https://t.me/rafagomesdev',
    // 0xrafasec is Rafa's separate security-research identity.
    blog: 'https://0xrafasec.com',
  },
  twitterHandle: '@rafagomesdev',
  impact: [
    { value: '19', label: 'years shipping software, builder first' },
    { value: '25', label: 'engineers led across 3 countries' },
    { value: '4', label: 'AI agents taken to production' },
    { value: '10–15', label: 'PRs per engineer, per day — 100% AI-native team' },
    { value: '1M', label: 'protocol users at Gateway, later acquired by Circle' },
  ],
  sides: [
    {
      title: 'The systems we ship',
      text: 'I own what decides whether an agent survives real usage: cost, observability and usage metrics, instrumented end to end. Four agents are in production with 3 major partners on revenue share.',
    },
    {
      title: 'How the team is built',
      text: 'A 100% AI-native team on trunk-based delivery, working from PRDs, architecture and security docs. Cost and usage tracked per developer, held to a measured standard — not vibes.',
    },
  ],
  // `major` roles get the heavier rule and larger title.
  experience: [
    {
      period: '2025 — now',
      role: 'Head of Engineering',
      company: 'Oak Network',
      note: 'agentic broker for real estate',
      major: true,
      summary:
        'Head of Engineering LatAm from Feb 2025, global since Mar 2026. 25 engineers in 3 countries. 4 AI agents in production with 3 revenue-sharing partners. Rebuilt the team as 100% AI-native: from 3 environments to trunk-based, 10–15 PRs per engineer per day.',
    },
    {
      period: '2022 — 2025',
      role: 'Lead Full Stack Engineer',
      company: 'Gateway',
      note: 'later acquired by Circle',
      major: true,
      summary:
        'Built the protocol, SDK and core products hands-on in Node.js, Go and Next.js while leading the team. The protocol reached 1M users with partners like the Solana Foundation; shipped private computing to production.',
    },
    {
      period: '2021 — 2022',
      role: 'Founder',
      company: 'Self-employed',
      note: 'crypto products',
      summary:
        'Built and launched crypto products end to end: staking apps, smart contracts and NFT collections — from contract design and full-stack build to product strategy, community and marketing.',
    },
    {
      period: '2020 — 2021',
      role: 'Lead Full Stack Engineer',
      company: 'Justpoint',
      note: 'New York',
      summary:
        'Built React and Node products around proprietary AI that reads medical records for medical-malpractice discovery.',
    },
    {
      period: '2018 — 2020',
      role: 'Software Engineering Manager',
      company: 'Accenture Song',
      summary:
        'Managed 30 engineers shipping React and Angular products for XP Investimentos, Itaú, Gol, American Express and Coca-Cola.',
    },
    {
      period: '2015 — 2017',
      role: 'Lead Full Stack Engineer',
      company: 'Huge',
      note: 'Senior Web Engineer → Lead',
      summary:
        "Internet banking for an international client; full-stack work for American Express and Brazil's top-10 companies.",
    },
    {
      period: '2013 — 2015',
      role: 'Partner & Dev Manager',
      company: 'Parafernalia Interactive',
      summary:
        'Ran technical and business operations as a partner, from business development to solution architecture and hands-on delivery.',
    },
    {
      period: '2007 — 2013',
      role: 'Earlier',
      company: 'Huge · 6D · Kaus Mídia · Add Technologies · casa56',
      summary:
        "Sites for Brazil's largest telecom and Veja SP (with ThoughtWorks), seasonal fashion platforms, and Flash/PHP campaigns for clients including Petrobras.",
    },
  ],
  projects: [
    {
      name: 'ai-workflow',
      kind: 'Open source · Claude Code plugin',
      description:
        'The process my team ships with, open-sourced: spec-driven, trunk-based delivery where agents build from the spec, a separate agent reviews it, and humans merge.',
      url: 'https://github.com/rafagomes/ai-workflow',
    },
    {
      name: 'ecies-bls12381',
      kind: 'Go',
      description: 'Keypair generation, encryption and decryption with ECIES over the BLS12-381 curve.',
      url: 'https://github.com/rafagomes/ecies-bls12381',
    },
    {
      name: 'rfirewall',
      kind: 'Rust',
      description: 'A user-centric firewall for Linux.',
      url: 'https://github.com/rafagomes/rfirewall',
    },
  ],
  // Topics published on 0xrafasec.com.
  writing: [
    'Flash-loan governance attacks, detected with Forta bots',
    'RAT communication and TLS-based evasion',
    'Bug reports that survive security triage',
    'CVE deep-dives',
  ],
  stack: 'Go, Rust, Python, TypeScript, Node.js, React, Next.js, NestJS, AWS, CI/CD, EVM, Solana',
  focus: 'Agentic systems, distributed systems, API & SDK design, protocol design, threat modeling',
  education: [
    { credential: 'Postgraduate, Advanced Go Development', issuer: 'Full Cycle', period: '2024–2025' },
    { credential: 'Ethical Hacker Nanodegree', issuer: 'Udacity', period: '2023' },
    {
      credential: 'Technologist Degree, Systems Analysis & Development',
      issuer: 'Estácio',
      period: '2018–2021',
    },
  ],
  certifications: [
    { name: 'Go Expert', issuer: 'Full Cycle', year: '2025' },
    { name: 'CEH & Security Training', issuer: 'EH Academy', year: '2019' },
    { name: 'Lead (leadership program)', issuer: 'ISE Business School', year: '2019' },
    { name: 'ScrumMaster', issuer: 'K21', year: '2015' },
    { name: 'VTEX Interface Developer', issuer: 'VTEX', year: '2013' },
  ],
  award: 'Intranet Design Annual Award (2013)',
  languages: ['Portuguese, native', 'English, full professional'],
};
