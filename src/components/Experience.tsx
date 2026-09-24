import { experience } from '../data';
import younifiedLogo from '../assets/photos/younified-square-logo.png';
import dsfLogo from '../assets/photos/dsf-square-logo.png';
import opheaLogo from '../assets/photos/ophea-square-logo.jpg';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const logos: Record<string, string> = {
  'Union Technologies (YOUnified)': younifiedLogo,
  'Down Syndrome Foundation': dsfLogo,
  Ophea: opheaLogo,
};

function Logo({ company }: { company: string }) {
  const src = logos[company];
  if (src) {
    return (
      <img
        src={src}
        alt=""
        loading="lazy"
        className="h-12 w-12 rounded-2xl border border-line bg-white object-contain p-1"
      />
    );
  }
  return (
    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-coral font-display text-lg font-bold text-white">
      {company.charAt(0)}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section bg-white border-y border-line">
      <div className="container-page">
        <SectionHeader
          index="02"
          eyebrow="Experience"
          title="Seven years, five teams, one habit: shipping."
          intro="From a student placement serving 1,000 schools to founding my own SaaS."
        />

        <ol className="divide-y divide-line border-t border-line">
          {experience.map((job) => (
            <li key={job.company}>
              <Reveal className="grid gap-6 py-10 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-4 flex md:flex-col items-start gap-4">
                  <Logo company={job.company} />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-coral-dark">
                      {job.period}
                    </p>
                    <p className="mt-1 font-display text-xl font-bold text-ink">{job.company}</p>
                    <p className="text-sm text-ink-muted">{job.location}</p>
                  </div>
                </div>

                <div className="md:col-span-8">
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-ink">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-lg text-ink-soft">{job.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-relaxed text-ink-soft">
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="chip bg-cream">{tag}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
