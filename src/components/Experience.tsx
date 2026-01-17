import { FiCalendar } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Union Technologies',
      period: '2023 - 2026',
      achievements: [
        'Built a React/TS CRM that improved sales execution: pipeline stages, call scheduling, reminders, scripts, meeting invites, and lead-to-client handoff.',
        'Developed custom internal tools and automations (Node/Express) for data intake, validation, and admin workflows to reduce manual ops work.',
        'Delivered and maintained union/client web properties across 125+ domains, including member areas, custom forms, and reliable launches.',
        'Owned UI/UX and brand deliverables alongside development: social campaigns, print assets, event collateral, and merch-ready designs.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Down Syndrome Foundation',
      period: '2021 - 2023',
      achievements: [
        'Shipped multi-month builds across ~12 nonprofit domains, delivering large page sets from UX prototypes to production.',
        'Launched program sites including Summer Camp registration and a Skills Development / workplace placement portal with complex forms and automated intake workflows.',
        'Implemented donation and intake flows plus admin-friendly content updates with accessibility-first UI.',
      ],
    },
    {
      title: 'JavaScript Developer',
      company: 'OPHEA',
      period: '2020 - 2021',
      achievements: [
        'Built React and TypeScript internal tools and Node.js scripts to automate content updates used by 900+ Ontario schools.',
        'Helped maintain OPHEA\'s React codebase by fixing UI bugs, improving forms, and polishing admin workflows.',
        'Collaborated with non-technical staff to turn update requests into small React features and scripts.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Experience
          </h2>
          <div className="w-12 h-1 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-0 top-2 w-2 h-2 -ml-1 rounded-full bg-teal-600 dark:bg-teal-400"></div>

                {/* Content */}
                <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-teal-600 dark:text-teal-400 font-medium">
                      {exp.company}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-1">
                      <FiCalendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-slate-600 dark:text-slate-300 flex items-start gap-3 text-sm leading-relaxed"
                      >
                        <span className="text-teal-600 dark:text-teal-400 mt-1.5 flex-shrink-0">
                          <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 6 6">
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
