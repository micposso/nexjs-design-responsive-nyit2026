export type SocialLink = {
  label: string;
  href: string;
};

export type SocialLinksProps = {
  links: SocialLink[];
  className?: string;
};

export function SocialLinks({ links, className = 'social-links' }: SocialLinksProps) {
  return (
    <div className={className}>
      {links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
    </div>
  );
}
