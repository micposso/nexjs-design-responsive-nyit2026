import { ProjectCard, type ProjectCardProps } from "./ProjectCard";
import { SectionHeading } from './SectionHeading';

type ProjectGridProps = {
  sectionId: string;
  sectionIndex: string;
  titleId: string;
  title: string;
  description: string;
  projects: ProjectCardProps[];
};

export function ProjectGrid({
  sectionId,
  sectionIndex,
  titleId,
  title,
  description,
  projects,
}: ProjectGridProps) {
  return (
    <section className="work section-pad" id={sectionId} aria-labelledby={titleId}>
      <SectionHeading
        sectionIndex={sectionIndex}
        titleId={titleId}
        title={title}
        description={description}
      />
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
      </div>
    </section>
  );
}
