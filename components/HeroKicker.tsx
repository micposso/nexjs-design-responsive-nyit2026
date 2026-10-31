export type HeroKickerProps = {
  label: string;
};

export function HeroKicker({ label }: HeroKickerProps) {
  return (
    <div className="hero-kicker">
      <span className="status-dot" />
      {label}
    </div>
  );
}
