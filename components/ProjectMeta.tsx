export type ProjectMetaProps = {
  title: string;
  discipline: string;
  year: string;
};

export function ProjectMeta({ title, discipline, year }: ProjectMetaProps) {
  return (
    <div className="project-meta">
      <div>
        <h3>{title}</h3>
        <p>{discipline}</p>
      </div>
      <span>{year}</span>
    </div>
  );
}
