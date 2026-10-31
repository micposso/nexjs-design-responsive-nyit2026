import type { ReactNode } from 'react';

export type ButtonLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  className?: string;
};

export function ButtonLink({ href, label, icon, className = 'header-cta' }: ButtonLinkProps) {
  return (
    <a className={className} href={href}>
      {label}
      {icon}
    </a>
  );
}
