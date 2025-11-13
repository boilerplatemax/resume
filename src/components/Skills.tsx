import { FiCode } from 'react-icons/fi';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFirebase,
  SiNginx,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiWordpress,
  SiElementor,
} from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
        { name: 'Python', icon: <SiPython className="text-blue-400" /> },
        { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
        { name: 'SQL', icon: <SiMysql className="text-blue-600" /> },
        { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <SiReact className="text-cyan-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900 dark:text-white" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      ],
    },
    {
      title: 'Platforms & Tools',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
        { name: 'Git', icon: <SiGit className="text-orange-600" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
        { name: 'Nginx', icon: <SiNginx className="text-green-600" /> },
      ],
    },
    {
      title: 'Design & CMS',
      skills: [
        { name: 'Figma', icon: <SiFigma className="text-purple-500" /> },
        { name: 'Illustrator', icon: <SiAdobeillustrator className="text-orange-600" /> },
        { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-600" /> },
        { name: 'WordPress', icon: <SiWordpress className="text-blue-500" /> },
        { name: 'Elementor', icon: <SiElementor className="text-pink-600" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Icon & Title */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 flex items-center justify-center mb-4 shadow-lg">
            <FiCode size={28} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
