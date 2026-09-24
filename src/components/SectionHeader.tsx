import type { ReactNode } from 'react';

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}

export default function SectionHeader({ index, eyebrow, title, intro }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16 max-w-2xl">
      <p className="eyebrow mb-4">
        <span className="text-ink-muted">{index}</span>
        <span className="h-px w-6 bg-coral" />
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {intro && <p className="mt-4 text-lg text-ink-soft leading-relaxed">{intro}</p>}
    </div>
  );
}
