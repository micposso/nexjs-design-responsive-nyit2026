export type BrandProps = {
  mark: string;
  name: string;
  href: string;
  ariaLabel: string;
  className?: string;
};

export function Brand({ mark, name, href, ariaLabel, className = 'brand' }: BrandProps) {
  return (
    <a className={className} href={href} aria-label={ariaLabel}>
      <span className="brand-mark">{mark}</span>
      <span>{name}</span>
    </a>
  );
}
