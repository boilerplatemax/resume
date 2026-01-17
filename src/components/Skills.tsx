import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiStripe,
  SiVercel,
  SiWordpress,
  SiJest,
  SiJavascript,
} from 'react-icons/si';
import { FiShield } from 'react-icons/fi';

export default function Skills() {
  const skills = [
    { name: 'React & TypeScript', icon: <SiReact className="text-cyan-500" /> },
    { name: 'Next.js (App Router)', icon: <SiNextdotjs className="text-slate-900 dark:text-white" /> },
    { name: 'JavaScript & HTML/CSS', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Node.js & Express', icon: <SiNodedotjs className="text-green-500" /> },
    { name: 'REST APIs & GraphQL', icon: <SiGraphql className="text-pink-500" /> },
    { name: 'Postgres/Supabase', icon: <SiPostgresql className="text-blue-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Auth & RBAC', icon: <FiShield className="text-slate-600 dark:text-slate-400" /> },
    { name: 'Stripe & SendGrid', icon: <SiStripe className="text-violet-500" /> },
    { name: 'Vercel & GitHub Actions', icon: <SiVercel className="text-slate-900 dark:text-white" /> },
    { name: 'WordPress', icon: <SiWordpress className="text-blue-500" /> },
    { name: 'Testing (Jest, RTL)', icon: <SiJest className="text-red-500" /> },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Skills
          </h2>
          <div className="w-12 h-1 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-teal-500 dark:hover:border-teal-400 transition-colors group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">
                {skill.icon}
              </span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
