import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUp, FiGlobe } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub size={24} />, href: 'https://github.com/boilerplatemax', label: 'GitHub' },
    { icon: <FiLinkedin size={24} />, href: 'https://www.linkedin.com/in/maxshapovalov/', label: 'LinkedIn' },
    { icon: <FiGlobe size={24} />, href: 'https://sitecraftersdev.com', label: 'Website' },
  ];

  return (
    <footer className="relative py-12 px-6 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 dark:from-gray-950 dark:via-purple-950 dark:to-gray-950 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <button
              onClick={scrollToTop}
              className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent hover:scale-110 transition-transform mb-4"
            >
              MS
            </button>
            <p className="text-purple-200 leading-relaxed">
              React Developer passionate about building exceptional web experiences.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-purple-200 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:maximsdev@gmail.com"
                  className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors group"
                >
                  <FiMail className="group-hover:scale-110 transition-transform" />
                  <span>maximsdev@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+14165793253"
                  className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors group"
                >
                  <FiPhone className="group-hover:scale-110 transition-transform" />
                  <span>(416) 579-3253</span>
                </a>
              </li>
              <li className="text-purple-200">Victoria, BC, Canada</li>
            </ul>
          </div>

          {/* Newsletter/CTA Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Let's Connect</h3>
            <p className="text-purple-200 mb-4">
              Available for freelance projects and full-time opportunities.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-purple-900 rounded-lg font-medium hover:bg-purple-100 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-purple-200 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Max Shapovalov. Built with React & Tailwind CSS.
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <span className="text-sm">Back to Top</span>
            <FiArrowUp className="group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
}
