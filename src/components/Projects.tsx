import { FiGithub, FiExternalLink } from "react-icons/fi"
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiStripe,
  SiVercel,
} from "react-icons/si"

import help321 from "../assets/photos/downsyndrome-canada-screenshot.png"
import unionTab from "../assets/photos/uniontab-screenshot.png"

export default function Projects() {
  const projects = [
    {
      title: "UnionTab",
      role: "Founder / Full-Stack Developer",
      description:
        "Built and monetized a multi-tenant SaaS to 2,000+ active users. Implemented Stripe subscriptions, tenant-aware roles (admin/user), and core collaboration features including posts, files, meetings, and public/private pages. Added account security controls and tiered access (free vs premium).",
      image: unionTab,
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "Postgres",
        "Tailwind",
        "Stripe",
        "Vercel",
      ],
      github: null,
      demo: "https://www.uniontab.com/",
      featured: true,
    },
    {
      title: "Help321",
      role: "Resource Finder for Down Syndrome Foundation",
      description:
        "Built a React web app backed by a custom API to surface Down syndrome-related resources across Canada. Implemented fast filtering and query logic designed for easy navigation by users and caregivers.",
      image: help321,
      technologies: ["React", "TypeScript", "API Integration"],
      github: null,
      demo: "https://help321.ca",
      featured: true,
    },
  ]

  const getTechIcon = (tech: string) => {
    const icons: Record<string, React.ReactElement> = {
      React: <SiReact className="text-cyan-500" />,
      TypeScript: <SiTypescript className="text-blue-500" />,
      "Next.js": <SiNextdotjs className="text-slate-900 dark:text-white" />,
      Tailwind: <SiTailwindcss className="text-cyan-400" />,
      Postgres: <SiPostgresql className="text-blue-600" />,
      Supabase: <SiSupabase className="text-emerald-500" />,
      Stripe: <SiStripe className="text-violet-500" />,
      Vercel: <SiVercel className="text-slate-900 dark:text-white" />,
    }
    return icons[tech] || null
  }

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-800/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Projects
          </h2>
          <div className="w-12 h-1 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-slate-100 dark:bg-slate-700/50 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-slate-300 dark:text-slate-600 mb-2">
                        {project.title.charAt(0)}
                      </div>
                      <div className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        Private Project
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-teal-600 dark:text-teal-400 font-medium mb-3">
                    {project.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 rounded-md text-xs font-medium"
                      title={tech}
                    >
                      {getTechIcon(tech) && (
                        <span className="text-sm">{getTechIcon(tech)}</span>
                      )}
                      <span className="text-slate-600 dark:text-slate-300">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <FiGithub size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <FiExternalLink size={16} />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
