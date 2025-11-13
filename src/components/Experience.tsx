import { FiBriefcase, FiExternalLink } from 'react-icons/fi';
import ophea from '../assets/photos/ophea-logo.png'
import uniontech from '../assets/photos/younified-logo.png'
import dsf from '../assets/photos/down-syndrome-logo.png'

export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Union Technologies Inc.',
      period: 'Dec 2022 - Nov 2025',
      logo: uniontech,
      achievements: [
        'Built a React/TypeScript CRM with lead & client management; Node backend, Tailwind UI',
        'Produced 4,000+ qualified leads by engineering a Node/TypeScript pipeline for public records',
        'Shipped Next.js features from design to prod with TanStack Query, deployed on Vercel/Cloudflare',
        'Built vote-tracking software for union elections with realtime tallies and admin dashboards',
        'Managed launches for 200+ domains: DNS and SSL setup, redirects, and go-live without downtime'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Down Syndrome Foundation - Help321',
      period: 'March 2023 - March 2025',
      logo: dsf,
      websites: [
        { url: 'https://help321.ca', label: 'help321.ca (React + API)' },
        { url: 'https://downsyndrome.ca', label: 'downsyndrome.ca' },
        { url: 'https://downsyndromefoundation.ca', label: 'downsyndromefoundation.ca' }
      ],
      achievements: [
        'Partnered with a non-profit to ship a 20+ page site from UX prototype to production',
        'Built help321.ca - a React-powered resource finder for Canada with custom filters and API integrations',
        'Maintained and enhanced multiple WordPress sites including downsyndrome.ca and downsyndromefoundation.ca',
        'Implemented donation flows and admin-friendly content updates with accessibility-first approach',
        'Developed custom React components with query logic for improved user experience'
      ]
    },
    {
      title: 'JavaScript Developer Intern',
      company: 'OPHEA',
      period: 'Jan 2021 - Nov 2022',
      logo: ophea,
      achievements: [
        'Built React/TypeScript tools and a Node.js script to automate updates for 900+ Ontario schools',
        'Automated a data-entry workflow, taking updates from days to same-day',
        'Improved page load times and accessibility site-wide'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Icon & Title */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 flex items-center justify-center mb-4 shadow-lg">
            <FiBriefcase size={28} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
        </div>

        {/* Single Column Layout */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 bg-white dark:bg-gray-800/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Company Logo */}
              {exp.logo && (
                <div className="mb-4 p-4 rounded-lg inline-block">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-12 object-contain"
                  />
                </div>
              )}

              {/* Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {exp.title}
                </h3>
                <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                  {exp.company}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {exp.period}
                </span>
              </div>

              {/* Website Links */}
              {exp.websites && (
                <div className="mb-4 space-y-2">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Projects:
                  </p>
                  {exp.websites.map((site, i) => (
                    <a
                      key={i}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:underline group/link"
                    >
                      <FiExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      {site.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Achievements */}
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-purple-600 dark:text-purple-400 mt-1.5 flex-shrink-0">
                      •
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
