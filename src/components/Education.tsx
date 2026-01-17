import { FiMapPin, FiCalendar, FiAward } from 'react-icons/fi';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Design (BDes)',
      field: 'Digital Futures',
      institution: 'OCAD University',
      period: 'Sep 2018 - Apr 2022',
      location: 'Toronto, ON',
    },
    {
      degree: 'Full Stack Open',
      field: 'Web Development Certificate',
      institution: 'University of Helsinki',
      period: '2023 - 2024',
      location: 'Helsinki, Finland (Online)',
    },
  ];

  const certificates = [
    {
      name: 'Google Project Management Certificate',
      year: '2025',
    },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-slate-50 dark:bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Education
          </h2>
          <div className="w-12 h-1 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Cards */}
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                {edu.degree}
              </h3>
              <p className="text-teal-600 dark:text-teal-400 font-medium mb-1">
                {edu.field}
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                {edu.institution}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <FiCalendar size={14} />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiMapPin size={14} />
                  {edu.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Certificates
          </h3>
          <div className="flex flex-wrap gap-3">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50"
              >
                <FiAward className="text-teal-600 dark:text-teal-400" size={16} />
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  {cert.name}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  ({cert.year})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
