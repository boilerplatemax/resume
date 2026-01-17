import { FiDownload, FiMail, FiArrowRight } from 'react-icons/fi';
import resume from '../assets/MaxShapovalov_Resume_2025.pdf';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-base text-teal-600 dark:text-teal-400 font-medium tracking-wide uppercase">
              Full-Stack Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight">
              Max Shapovalov
            </h1>
            <div className="w-24 h-1 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Full-Stack developer specializing in React/Next.js. Delivered 125+ domains,
            built a sales CRM, and shipped a monetized SaaS to 2,000+ active users.
          </p>
          <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              Victoria, BC
            </span>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <span>Available for opportunities</span>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="group px-6 py-3 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg font-medium flex items-center gap-2"
            >
              <FiMail className="group-hover:rotate-6 transition-transform" size={18} />
              Get in touch
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-all hover:-translate-y-0.5 font-medium flex items-center gap-2 text-slate-700 dark:text-slate-300"
            >
              <FiDownload className="group-hover:translate-y-0.5 transition-transform" size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
