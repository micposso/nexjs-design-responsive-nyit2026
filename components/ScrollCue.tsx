export type ScrollCueProps = {
  href: string;
  label: string;
  symbol: string;
};

export function ScrollCue({ href, label, symbol }: ScrollCueProps) {
  return (
    <a className="scroll-cue" href={href}>
      <span>{label}</span>
      <span className="scroll-arrow" aria-hidden="true">{symbol}</span>
    </a>
  );
}
