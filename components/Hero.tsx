import type { ReactNode } from "react";

import { HeroKicker } from './HeroKicker';
import { ScrollCue } from './ScrollCue';

type HeroProps = {
  titleId: string;
  kicker: string;
  heading: ReactNode;
  description: string;
  scrollLabel: string;
  scrollHref: string;
  scrollSymbol: string;
};

export function Hero({ titleId, kicker, heading, description, scrollLabel, scrollHref, scrollSymbol }: HeroProps) {
  return (
    <section className="hero" aria-labelledby={titleId}>
      <HeroKicker label={kicker} />
      <h1 id={titleId}>{heading}</h1>
      <div className="hero-bottom">
        <p>{description}</p>
        <ScrollCue href={scrollHref} label={scrollLabel} symbol={scrollSymbol} />
      </div>
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />
    </section>
  );
}
