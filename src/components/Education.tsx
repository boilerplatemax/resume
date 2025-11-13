import { FiBookOpen } from 'react-icons/fi';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Design (Digital Futures)',
      institution: 'OCAD University',
      period: '2018-2022',
      location: 'Toronto, ON',
      description: 'Focused on digital design, interactive media, and web technologies.',
    },
    {
      degree: 'Full Stack Open Certificate',
      institution: 'University of Helsinki',
      period: '2023',
      location: 'Helsinki, Finland (Online)',
      description: 'Comprehensive course covering React, Node.js, GraphQL, TypeScript, and modern web development.',
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800/50 dark:to-pink-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Icon & Title */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 flex items-center justify-center mb-4 shadow-lg">
            <FiBookOpen size={28} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-600 via-purple-600 to-blue-600 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 border-4 border-white dark:border-gray-900 z-10 shadow-lg"></div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="group p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-pink-500 dark:hover:border-pink-400 bg-white dark:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    {/* Degree */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-1">
                      {edu.institution}
                    </p>

                    {/* Period & Location */}
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span className="font-medium">{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
