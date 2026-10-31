export type SectionHeadingProps = {
  sectionIndex: string;
  titleId: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({
  sectionIndex,
  titleId,
  title,
  description,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={['section-heading', className].filter(Boolean).join(' ')}>
      <div>
        <span className="section-index">{sectionIndex}</span>
        <h2 id={titleId}>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
