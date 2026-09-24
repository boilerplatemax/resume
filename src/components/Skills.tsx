import { skillGroups } from '../data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const accents = ['bg-coral', 'bg-butter', 'bg-emerald-400', 'bg-sky-400'];

export default function Skills() {
  return (
    <section id="skills" className="section bg-white border-y border-line">
      <div className="container-page">
        <SectionHeader
          index="04"
          eyebrow="Toolkit"
          title="The whole stack, plus the parts around it."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.name} delay={i * 80}>
              <div className="h-full rounded-3xl border border-line bg-cream p-7">
                <div className="flex items-center gap-3">
                  <span aria-hidden className={`h-3 w-3 rounded-full ${accents[i]}`} />
                  <h3 className="font-display text-2xl font-bold text-ink">{group.name}</h3>
                  <span className="text-sm text-ink-muted">{group.blurb}</span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
