import { FiAward, FiBookOpen, FiGlobe } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const items = [
  {
    icon: FiBookOpen,
    title: 'Bachelor of Design (BDes), Digital Futures',
    org: 'OCAD University, Toronto',
    period: '2018 to 2022',
  },
  {
    icon: FiBookOpen,
    title: 'Full Stack Open',
    org: 'University of Helsinki (online)',
    period: '2023 to 2024',
  },
  {
    icon: FiAward,
    title: 'Google Project Management Certificate',
    org: 'Google',
    period: '2025',
  },
  {
    icon: FiGlobe,
    title: 'Bilingual: English & French',
    org: 'Professional working proficiency',
    period: 'EN / FR',
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-page">
        <SectionHeader index="05" eyebrow="Education" title="Trained in design. Certified in shipping." />

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="card flex h-full items-start gap-4 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-butter-light text-ink">
                  <item.icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold leading-snug text-ink">{item.title}</h3>
                  <p className="text-ink-soft">{item.org}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                    {item.period}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
