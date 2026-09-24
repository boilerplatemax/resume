import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi';
import resume from '../assets/MaxShapovalov_Resume.pdf';
import portrait from '../assets/photos/hero-portrait.webp';
import { stats } from '../data';

export default function Hero() {
  return (
    <section id="top" className="relative px-5 sm:px-6 pt-28 md:pt-36 pb-16 md:pb-20">
      {/* Soft background shapes */}
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-coral-light blur-3xl opacity-70" />
      <div aria-hidden className="pointer-events-none absolute top-60 -left-40 h-80 w-80 rounded-full bg-butter-light blur-3xl" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10">
          {/* Portrait (first on mobile) */}
          <div className="order-first md:order-last md:col-span-5">
            <div className="relative mx-auto w-64 sm:w-80 md:w-full md:max-w-[26rem]">
              <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2.5rem] bg-coral" />
              <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-ink bg-white">
                <img
                  src={portrait}
                  alt="Portrait of Max Shapovalov"
                  width={960}
                  height={1200}
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              {/* Stickers */}
              <div
                style={{ ['--r' as string]: '-6deg' }}
                className="absolute -left-6 sm:-left-10 top-8 animate-float rounded-2xl border-2 border-ink bg-butter px-3.5 py-2 shadow-pop"
              >
                <p className="font-display text-xl font-extrabold leading-none">2,000+</p>
                <p className="text-[11px] font-medium">users on my SaaS</p>
              </div>
              <div
                style={{ ['--r' as string]: '5deg', animationDelay: '1.2s' }}
                className="absolute -right-4 sm:-right-8 bottom-10 animate-float rounded-2xl border-2 border-ink bg-white px-3.5 py-2 shadow-pop"
              >
                <p className="font-display text-xl font-extrabold leading-none">150</p>
                <p className="text-[11px] font-medium">websites launched</p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="min-w-0 md:col-span-7">
            <div className="chip mb-6 bg-white">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to full-time roles
              <span className="text-line">|</span>
              <FiMapPin size={12} />
              Victoria, BC
            </div>

            <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
              Hi, I&rsquo;m Max.
              <br />
              I build{' '}
              <span className="relative sm:whitespace-nowrap">
                <span className="relative z-10">the whole thing</span>
                <svg
                  aria-hidden
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 z-0 h-4 w-full text-coral"
                >
                  <path d="M3 14 C 80 4, 200 4, 297 12" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              .
            </h1>

            <p className="mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-ink-soft">
              Full-stack developer, designer, and founder. I take products from database
              to brand: I built and monetized <strong className="font-semibold text-ink">UnionTab</strong> to
              2,000+ active users, shipped a sales CRM, and launched 150 websites along the way.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary group">
                Let&rsquo;s work together
                <FiArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
              </a>
              <a href={resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <FiDownload size={16} />
                Download resume
              </a>
            </div>

            <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
              React &middot; Next.js &middot; TypeScript &middot; Postgres &middot; Figma
            </p>
          </div>
        </div>

        {/* Proof strip */}
        <dl className="mt-16 md:mt-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px overflow-hidden rounded-3xl border border-line bg-line">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white px-5 py-6 last:col-span-2 sm:last:col-span-1">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-extrabold tracking-tight text-ink">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-ink-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
