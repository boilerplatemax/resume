import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMenu, FiX, FiDownload } from 'react-icons/fi';
import resume from '../assets/MaxShapovalov_Resume.pdf';
import { contact } from '../data';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
        <nav
          className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? 'border-line bg-white/85 shadow-card backdrop-blur-md'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-lg font-bold text-ink"
            aria-label="Back to top"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-sm text-cream">
              M
            </span>
            <span className="hidden sm:inline">Max Shapovalov</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-cream-dark hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-ink-soft transition-colors hover:bg-cream-dark hover:text-ink"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-ink-soft transition-colors hover:bg-cream-dark hover:text-ink"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-coral"
            >
              <FiDownload size={14} />
              Resume
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-full p-2 text-ink"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-cream md:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex h-full flex-col justify-center gap-2 px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="font-display text-5xl font-bold text-ink transition-colors hover:text-coral"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-10 flex items-center gap-3">
            <a href={resume} target="_blank" rel="noopener noreferrer" className="btn-primary" tabIndex={mobileMenuOpen ? 0 : -1}>
              <FiDownload size={16} />
              Resume
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-ink p-3" aria-label="GitHub" tabIndex={mobileMenuOpen ? 0 : -1}>
              <FiGithub size={18} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-ink p-3" aria-label="LinkedIn" tabIndex={mobileMenuOpen ? 0 : -1}>
              <FiLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
