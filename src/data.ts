// Single source of truth for site content. Numbers and dates here match the
// resume kit's canonical values; keep them identical across the site and PDF.

export const contact = {
  name: 'Max Shapovalov',
  location: 'Victoria, BC',
  email: 'maximsdev@gmail.com',
  phone: '(416) 579-3253',
  phoneHref: 'tel:+14165793253',
  github: 'https://github.com/boilerplatemax',
  linkedin: 'https://www.linkedin.com/in/maxshapovalov/',
}

export const stats = [
  { value: '7', label: 'years shipping for the web' },
  { value: '150', label: 'websites launched' },
  { value: '200+', label: 'domains managed' },
  { value: '2,000+', label: 'active users on my SaaS' },
  { value: '1,000', label: 'Ontario schools served' },
]

export type Experience = {
  company: string
  title: string
  period: string
  location: string
  logo?: string
  summary: string
  bullets: string[]
  tags: string[]
}

export const experience: Experience[] = [
  {
    company: 'UnionTab',
    title: 'Founder & Full-Stack Developer',
    period: '2025 to Present',
    location: 'Remote (Victoria, BC)',
    summary:
      'Designed, built, and monetized a multi-tenant SaaS for union executives, solo, from first commit to paying customers.',
    bullets: [
      'Grew the product to 2,000+ active users on Next.js, TypeScript, Supabase/Postgres, Tailwind, and Vercel.',
      'Implemented Stripe subscriptions, tenant-aware roles (admin/user), and tiered free vs. premium access.',
      'Shipped secure online voting, mass email and SMS, member portals, document storage, and event RSVPs.',
      'Designed a self-serve onboarding (no demo, no credit card on the free tier) to lower the barrier to sign-up.',
      'Own the brand, marketing site, email funnel, infrastructure, and customer support end to end.',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Product'],
  },
  {
    company: 'Union Technologies (YOUnified)',
    title: 'Full-Stack Developer',
    period: '2022 to 2026',
    location: 'Toronto, ON (Remote)',
    summary:
      'The end-to-end digital resource for the company and its union clients: development, UX, design, and marketing.',
    bullets: [
      'Built a custom React/TypeScript sales CRM with pipeline stages, automated follow-ups, call scripts, and lead-to-client handoff.',
      'Automated the full lead lifecycle: rep assignment, auto-recontact of cold leads, and recurring client follow-ups.',
      'Built and maintained YOUnified, a multi-tenant membership app used by several thousand members.',
      'Launched 150 WordPress sites from brief to go-live and managed DNS, SSL, and launches across 200+ domains.',
      'Developed Node/Express internal tools for data intake, validation, and admin workflows, cutting manual ops work.',
      'Delivered brand refreshes, social campaigns, and SEO for dozens of union locals.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'WordPress', 'SEO', 'Brand'],
  },
  {
    company: 'Canadian Network for Respiratory Care',
    title: 'Freelance Designer & Web Developer',
    period: '2024 to Present',
    location: 'Remote',
    summary:
      'Web, design, and content partner for a national respiratory health organization.',
    bullets: [
      'Designed and built a full website redesign on WordPress and provide ongoing technical and web support.',
      'Designed and developed personal portfolio websites for the organization’s leadership.',
      'Produce graphics, brand assets, and short-form video for outreach and announcements.',
    ],
    tags: ['WordPress', 'Design', 'Content'],
  },
  {
    company: 'Down Syndrome Foundation',
    title: 'Web Developer',
    period: '2021 to 2022',
    location: 'Toronto, ON',
    summary:
      'Took a family of nonprofit sites from UX prototype to production.',
    bullets: [
      'Shipped ~12 nonprofit web properties on multi-month builds, from UX prototype to production.',
      'Launched Summer Camp registration and a Skills Development workplace-placement portal with complex forms.',
      'Built automated application and reply pipelines that sent applicants next steps instantly, cutting manual response work.',
      'Implemented donation and intake flows with accessibility-first UI and admin-friendly content editing.',
    ],
    tags: ['WordPress', 'React', 'Accessibility', 'UX'],
  },
  {
    company: 'Ophea',
    title: 'JavaScript Developer',
    period: '2019 to 2021',
    location: 'Toronto, ON',
    summary:
      'Started as a student placement and grew into a developer role on a platform used across Ontario.',
    bullets: [
      'Built React/TypeScript internal tools and Node.js scripts that automated content updates for 1,000 Ontario schools.',
      'Roughly halved the time for routine content-update tasks with scripts and tooling.',
      'Fixed UI bugs, improved forms, and polished admin workflows in a production React codebase.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Automation'],
  },
]

export type ClientProject = {
  name: string
  url: string
  blurb: string
  tags: string[]
}

export const clientWork: ClientProject[] = [
  {
    name: 'Stingray Cleaning',
    url: 'https://stingraycleaning.com',
    blurb: 'Instant-quote calculator that prices a job in under 60 seconds, then captures the lead.',
    tags: ['Next.js', 'Conversion UX'],
  },
  {
    name: 'ATU 1573',
    url: 'https://atu1573.ca',
    blurb: 'Union site for 1,000+ members with 2FA login, member approval, and real-time notifications.',
    tags: ['Auth', 'Member portal'],
  },
  {
    name: 'Shrimpyard',
    url: 'https://shrimpyard.ca',
    blurb: 'Aquarium-shrimp store built end to end: storefront, Stripe checkout, and branding.',
    tags: ['React', 'Stripe', 'Brand'],
  },
  {
    name: 'APSSP',
    url: 'https://apssp.org',
    blurb: 'Modernized platform for a professional-education union of 850+ members.',
    tags: ['WordPress', 'UX'],
  },
  {
    name: 'Signature Span',
    url: 'https://signaturespan.com',
    blurb: 'Minimal, photography-led site for an architectural glass studio.',
    tags: ['React', 'Tailwind'],
  },
  {
    name: "Salvatore's Gourmet Foods",
    url: 'https://salvatoresgourmetfoods.com',
    blurb: 'Online store for Italian foods with a shipping calculator, local delivery, and a food blog.',
    tags: ['WooCommerce', 'E-commerce'],
  },
  {
    name: 'Camp 3-21',
    url: 'https://camp321.ca',
    blurb: 'Bright, playful summer camp site with online registration and program info.',
    tags: ['WordPress', 'Design'],
  },
  {
    name: 'Peel Transition',
    url: 'https://peeltransition.ca',
    blurb: 'Fast-deployed public campaign site opposing the dissolution of Peel Region.',
    tags: ['Campaign', 'WordPress'],
  },
]

export const skillGroups = [
  {
    name: 'Build',
    blurb: 'Frontend to database',
    items: [
      'React', 'Next.js (App Router)', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS',
      'Node.js & Express', 'REST & GraphQL', 'Postgres / Supabase', 'MongoDB',
      'Auth & RBAC (multi-tenant)', 'Stripe', 'Jest & RTL',
    ],
  },
  {
    name: 'Design',
    blurb: 'BDes-trained eye',
    items: [
      'Figma', 'UX & prototyping', 'Accessibility (a11y)', 'Brand identity',
      'Color & type systems', 'Photoshop & Illustrator', 'Canva', 'Print & event collateral',
    ],
  },
  {
    name: 'Grow',
    blurb: 'Get it in front of people',
    items: [
      'SEO', 'Google Analytics (GA4)', 'Email funnels (Mailchimp, SendGrid)',
      'Social content', 'Copywriting', 'Short-form video',
    ],
  },
  {
    name: 'Run',
    blurb: 'Keep it online',
    items: [
      'WordPress & WooCommerce', 'Vercel', 'GitHub Actions (CI/CD)', 'DNS, SSL & launches',
      'Hosting', 'Linux & CLI', 'Git',
    ],
  },
]
