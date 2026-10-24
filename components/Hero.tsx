export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-kicker">
        <span className="status-dot" />
        Independent creative studio
      </div>
      <h1 id="hero-title">
        Designing brands
        <br />
        people want to <em>stay with.</em>
      </h1>
      <div className="hero-bottom">
        <p>
          Mira is a small, senior-led studio creating warm identities, digital
          experiences, and thoughtful spaces for ambitious people.
        </p>
        <a className="scroll-cue" href="#work">
          <span>Explore selected work</span>
          <span className="scroll-arrow" aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />
    </section>
  );
}
