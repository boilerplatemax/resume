import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiExpress,
} from 'react-icons/si';

import help321 from '../assets/photos/downsyndrome-canada-screenshot.png'
import pocketbartender from '../assets/photos/pocketbartender.png'

export default function Projects() {
  const projects = [
    {
      title: 'Help321 - Resource Finder',
      description:
        'React-powered resource finder for Down Syndrome Foundation providing access to Canadian support resources. Features custom filtering, URL params/query handling, API integration, and donation flows.',
      image: help321, // Add project image URL when available
      technologies: ['React', 'TypeScript', 'API Integration'],
      github: null, // Private repository
      demo: 'https://help321.ca',
    },
    {
      title: 'Pocket Bartender',
      description:
        'This Web app uses the CocktailDB API to display a wide variety of drinks along with their ingredients and recipes. Explore hundreds of cocktails and save your favourites!',
      image: pocketbartender,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'API Integration'],
      github: 'https://github.com/boilerplatemax/Pocket-BartenderV2',
      demo: 'https://pocketbartender.netlify.app/',
    },
  ];

  const getTechIcon = (tech: string) => {
    const icons: Record<string, React.ReactElement> = {
      React: <SiReact className="text-cyan-400" />,
      TypeScript: <SiTypescript className="text-blue-500" />,
      'Next.js': <SiNextdotjs className="text-gray-900 dark:text-white" />,
      'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
      'Node.js': <SiNodedotjs className="text-green-500" />,
      Firebase: <SiFirebase className="text-yellow-500" />,
      Express: <SiExpress className="text-gray-700 dark:text-gray-300" />,
    };
    return icons[tech] || null;
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-blue-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Icon & Title */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 flex items-center justify-center mb-4 shadow-lg">
            <FiFolder size={28} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FiFolder size={64} className="text-white opacity-50" />
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technology Icons */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium"
                      title={tech}
                    >
                      <span className="text-lg">{getTechIcon(tech)}</span>
                      <span className="text-gray-700 dark:text-gray-300">{tech}</span>
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
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <FiGithub size={20} />
                      <span className="font-medium">Code</span>
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <FiExternalLink size={20} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
