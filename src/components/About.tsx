import { FiUser } from 'react-icons/fi';
import profilePhoto from '../assets/photos/about-portrait.png'
export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800/50 dark:to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Icon & Title */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 flex items-center justify-center mb-4 shadow-lg">
            <FiUser size={28} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 p-1 shadow-2xl hover:scale-105 transition-transform duration-300 transform-gpu">
  <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden transform-gpu">
    <img
      src={profilePhoto}
      alt="Max Shapovalov"
      className="w-full h-full object-cover transform-gpu"
    />
  </div>
</div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-purple-300 dark:bg-purple-600 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-pink-300 dark:bg-pink-600 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a <span className="font-semibold text-purple-600 dark:text-purple-400">React Developer</span> based in Victoria, BC,
              with a passion for building accessible, performant web applications that make a difference.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With experience shipping production features at scale, I specialize in{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">React</span>,{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">Next.js</span>, and{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">TypeScript</span>.
              I've contributed to projects ranging from CRM systems to non-profit websites, always with a focus on clean code and exceptional user experience.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new web technologies, contributing to open source,
              or working on side projects that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
