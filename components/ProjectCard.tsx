import { ProjectMeta, type ProjectMetaProps } from './ProjectMeta';
import { ProjectThumbnail, type ProjectThumbnailProps } from './ProjectThumbnail';

export type ProjectCardProps = ProjectMetaProps & ProjectThumbnailProps;

export function ProjectCard({ title, discipline, year, image, alt, href, viewLabel, openSymbol }: ProjectCardProps) {
  return (
    <article className="project-card">
      <ProjectThumbnail
        title={title}
        image={image}
        alt={alt}
        href={href}
        viewLabel={viewLabel}
        openSymbol={openSymbol}
      />
      <ProjectMeta title={title} discipline={discipline} year={year} />
    </article>
  );
}
