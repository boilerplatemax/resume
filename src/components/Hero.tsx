import { FiDownload, FiMail } from 'react-icons/fi';
import resume from '../assets/MaxShapovalov_Resume_2025.pdf';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
              Hi, my name is
            </p>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
              Max Shapovalov
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300">
              React Developer
            </p>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            React/Next.js specialist converting prototypes into scalable, production UI with speed and care.
          </p>
          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/50 font-medium flex items-center gap-2"
            >
              <FiMail className="group-hover:rotate-12 transition-transform" />
              Get in touch
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-purple-600 dark:border-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 rounded-lg transition-all hover:-translate-y-1 hover:shadow-xl font-medium flex items-center gap-2"
            >
              <FiDownload className="group-hover:animate-bounce" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
