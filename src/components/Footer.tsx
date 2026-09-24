import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { contact } from '../data';

export default function Footer() {
  const socials = [
    { icon: FiGithub, href: contact.github, label: 'GitHub' },
    { icon: FiLinkedin, href: contact.linkedin, label: 'LinkedIn' },
    { icon: FiMail, href: `mailto:${contact.email}`, label: 'Email' },
  ];

  return (
    <footer className="border-t border-line px-5 sm:px-6 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-ink-muted">
          &copy; {new Date().getFullYear()} Max Shapovalov. Designed and built in Victoria, BC.
        </p>

        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              <s.icon size={17} />
            </a>
          ))}
          <a
            href="#top"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-coral"
          >
            Back to top
            <FiArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
