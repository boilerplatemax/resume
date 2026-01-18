import profilePhoto from '../assets/photos/about-portrait.png';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            About
          </h2>
          <div className="w-12 h-1 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Profile Image */}
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-64 md:w-72 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-lg bg-slate-100 dark:bg-slate-800">
                <img
                  src={profilePhoto}
                  alt="Max Shapovalov"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-teal-600 dark:border-teal-400 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm a <span className="font-semibold text-slate-900 dark:text-white">Full-Stack Developer</span> and founder based in Victoria, BC.
              I specialize in building production-ready applications with React and Next.js.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              As the founder of <span className="font-semibold text-slate-900 dark:text-white">UnionTab</span>, I built and monetized a multi-tenant SaaS
              platform to over 2,000 active users, implementing Stripe subscriptions, tenant-aware roles, and
              collaboration features.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              At Union Technologies, I built a React/TypeScript CRM that improved sales execution
              and delivered web properties across 125+ domains. I enjoy turning complex requirements into
              clean, scalable solutions.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div>
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">125+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Domains Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">2,000+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">SaaS Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">5+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
