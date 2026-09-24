import { FiCode, FiPenTool, FiTrendingUp, FiServer } from 'react-icons/fi';
import aboutPhoto from '../assets/photos/about-square.webp';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const hats = [
  { icon: FiCode, label: 'Build', text: 'React, Next.js, and Node apps from schema to UI.' },
  { icon: FiPenTool, label: 'Design', text: 'UX flows, brand systems, and interfaces people enjoy.' },
  { icon: FiTrendingUp, label: 'Grow', text: 'SEO, email funnels, and social that bring users in.' },
  { icon: FiServer, label: 'Run', text: 'Hosting, DNS, auth, and uptime across 200+ domains.' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <SectionHeader
          index="01"
          eyebrow="About"
          title={<>A developer with a designer&rsquo;s eye and a founder&rsquo;s urgency.</>}
        />

        <div className="grid gap-5 md:grid-cols-6">
          {/* Story */}
          <Reveal className="md:col-span-4">
            <div className="card h-full p-7 md:p-9 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                I&rsquo;m a full-stack developer based in Victoria, BC with{' '}
                <strong className="font-semibold text-ink">7 years</strong> of shipping for the web. I
                trained as a designer (BDes, OCAD University) and taught myself to build everything
                the design needs, so nothing gets lost in handoff.
              </p>
              <p>
                In 2025 I founded <strong className="font-semibold text-ink">UnionTab</strong>, a
                multi-tenant SaaS for union executives. I designed it, built it, sell it, and support
                it, and it now serves <strong className="font-semibold text-ink">2,000+ active users</strong>.
              </p>
              <p>
                Before that I was the one-person digital team at Union Technologies: a sales CRM, a
                membership platform, 150 websites, and the brand and marketing work around them. I
                like hard problems, clear interfaces, and shipping things people actually use.
              </p>
            </div>
          </Reveal>

          {/* Photo */}
          <Reveal className="md:col-span-2" delay={100}>
            <div className="relative h-full min-h-72 overflow-hidden rounded-3xl border border-line bg-white shadow-card">
              <img
                src={aboutPhoto}
                alt="Max Shapovalov in a blue shirt"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute bottom-4 left-4 chip bg-white/90 backdrop-blur">
                Bilingual: English &amp; French
              </span>
            </div>
          </Reveal>

          {/* Hats */}
          {hats.map((hat, i) => (
            <Reveal key={hat.label} className="md:col-span-3 lg:col-span-3" delay={i * 60}>
              <div className="card group flex h-full items-start gap-4 p-6 transition-transform hover:-translate-y-1">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-coral-light text-coral-dark transition-colors group-hover:bg-coral group-hover:text-white">
                  <hat.icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{hat.label}</h3>
                  <p className="mt-1 text-ink-soft">{hat.text}</p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Pitch + currently */}
          <Reveal className="md:col-span-3">
            <div className="h-full rounded-3xl border-2 border-ink bg-butter p-7 shadow-pop">
              <p className="font-mono text-xs uppercase tracking-[0.16em]">The pitch</p>
              <p className="mt-3 font-display text-3xl font-bold leading-tight">
                One hire who can own your whole digital product, from first sketch to scale.
              </p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-3" delay={80}>
            <div className="h-full rounded-3xl bg-ink p-7 text-cream">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-butter">Currently</p>
              <ul className="mt-4 space-y-3 text-lg">
                <li className="flex gap-3"><span className="text-coral">&#9679;</span>Scaling UnionTab and shipping new features weekly</li>
                <li className="flex gap-3"><span className="text-coral">&#9679;</span>Freelance design and web for CNRC</li>
                <li className="flex gap-3"><span className="text-coral">&#9679;</span>Looking for a product team to build with full-time</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
