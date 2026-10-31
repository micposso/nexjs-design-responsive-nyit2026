import { Brand } from './Brand';
import { SocialLinks, type SocialLink } from './SocialLinks';

export type FooterProps = {
  brandMark: string;
  brandName: string;
  brandHref: string;
  description: string;
  links: SocialLink[];
};

export function Footer({ brandMark, brandName, brandHref, description, links }: FooterProps) {
  return (
    <footer className="footer section-pad">
      <Brand
        className="brand footer-brand"
        mark={brandMark}
        name={brandName}
        href={brandHref}
        ariaLabel={brandName}
      />
      <p>{description}</p>
      <SocialLinks links={links} />
    </footer>
  );
}
