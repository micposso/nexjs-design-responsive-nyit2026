type ArrowUpRightProps = {
  size?: number;
};

export function ArrowUpRight({ size = 16 }: ArrowUpRightProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  );
}
