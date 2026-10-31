export type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationProps = {
  links: NavigationLink[];
  ariaLabel: string;
  className?: string;
};

export function Navigation({ links, ariaLabel, className = 'desktop-nav' }: NavigationProps) {
  return (
    <nav className={className} aria-label={ariaLabel}>
      {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
    </nav>
  );
}
