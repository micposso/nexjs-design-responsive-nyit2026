const ArrowUpRight = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M4 12 12 4M5 4h7v7" />
  </svg>
);

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Mira Studio home">
        <span className="brand-mark">m</span>
        <span>Mira Studio</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href="#contact">
        Let&apos;s talk
        <ArrowUpRight />
      </a>
    </header>
  );
}
