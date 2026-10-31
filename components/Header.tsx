import { ArrowUpRight } from './ArrowUpRight';
import { Brand } from './Brand';
import { ButtonLink } from './ButtonLink';
import { Navigation, type NavigationLink } from './Navigation';

export type HeaderProps = {
  brandMark: string;
  brandName: string;
  brandHref: string;
  brandAriaLabel: string;
  navigationAriaLabel: string;
  navigation: NavigationLink[];
  cta: NavigationLink;
};

export function Header({
  brandMark,
  brandName,
  brandHref,
  brandAriaLabel,
  navigationAriaLabel,
  navigation,
  cta,
}: HeaderProps) {
  return (
    <header className="site-header">
      <Brand mark={brandMark} name={brandName} href={brandHref} ariaLabel={brandAriaLabel} />
      <Navigation links={navigation} ariaLabel={navigationAriaLabel} />
      <ButtonLink href={cta.href} label={cta.label} icon={<ArrowUpRight />} />
    </header>
  );
}
