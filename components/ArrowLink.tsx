import type { ReactNode } from 'react';

export type ArrowLinkProps = {
  href: string;
  className: string;
  children: ReactNode;
  icon: ReactNode;
};

export function ArrowLink({ href, className, children, icon }: ArrowLinkProps) {
  return (
    <a className={className} href={href}>
      {children}
      {icon}
    </a>
  );
}
