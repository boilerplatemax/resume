import { FiArrowUpRight } from 'react-icons/fi';
import { clientWork } from '../data';
import unionTab from '../assets/photos/uniontab-screenshot.webp';
import help321 from '../assets/photos/downsyndrome-canada-screenshot.webp';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const featured = [
  {
    title: 'UnionTab',
    kicker: 'Founder, design and full-stack',
    description:
      'A multi-tenant SaaS for union executives: secure online voting, mass email and SMS, member portals, document storage, and event RSVPs. Built solo and grown to 2,000+ active users.',
    image: unionTab,
    url: 'https://www.uniontab.com/',
    metric: '2,000+ active users',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Vercel'],
    accent: 'bg-coral-light',
  },
  {
    title: 'Down Syndrome Canada & Help321',
    kicker: 'WordPress, React, UX',
    description:
      'A custom WordPress and React site for a national nonprofit, with donations, educational resources, and Help321: a resource finder with fast filtering for families and caregivers across Canada.',
    image: help321,
    url: 'https://help321.ca',
    metric: 'National nonprofit',
    tags: ['React', 'WordPress', 'Accessibility'],
    accent: 'bg-butter-light',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <SectionHeader
          index="03"
          eyebrow="Selected work"
          title="Things I've built that real people use."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group block h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-pop hover:border-ink"
              >
                <div className={`${project.accent} px-6 pt-6 md:px-8 md:pt-8`}>
                  <div className="overflow-hidden rounded-t-2xl border border-b-0 border-line bg-white">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-coral-dark">
                        {project.kicker}
                      </p>
                      <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-ink">
                        {project.title}
                      </h3>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink transition-colors group-hover:bg-coral group-hover:border-coral group-hover:text-white">
                      <FiArrowUpRight size={20} />
                    </span>
                  </div>
                  <p className="mt-3 leading-relaxed text-ink-soft">{project.description}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="chip border-ink bg-butter text-ink">{project.metric}</span>
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip bg-cream">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Client work */}
        <div className="mt-20">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Client work
            </h3>
            <p className="hidden sm:block text-sm text-ink-muted">A few of the 150 sites I&rsquo;ve launched</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clientWork.map((item, i) => (
              <li key={item.name}>
                <Reveal delay={(i % 4) * 60} className="h-full">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group flex h-full flex-col p-5 transition-all hover:-translate-y-1 hover:border-coral"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-display text-lg font-bold leading-tight text-ink">{item.name}</h4>
                      <FiArrowUpRight className="shrink-0 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-coral" size={18} />
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{item.blurb}</p>
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                      {item.tags.join(' / ')}
                    </p>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
