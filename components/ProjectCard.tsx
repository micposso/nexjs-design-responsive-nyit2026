import Image, { type StaticImageData } from "next/image";

type ProjectCardProps = {
  title: string;
  discipline: string;
  year: string;
  image: StaticImageData;
  alt: string;
};

export function ProjectCard({ title, discipline, year, image, alt }: ProjectCardProps) {
  return (
    <article className="project-card">
      <a className="project-image" href="#contact" aria-label={`View ${title} project`}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 719px) 100vw, (max-width: 1199px) 50vw, 25vw"
        />
        <span className="project-open" aria-hidden="true">↗</span>
      </a>
      <div className="project-meta">
        <div>
          <h3>{title}</h3>
          <p>{discipline}</p>
        </div>
        <span>{year}</span>
      </div>
    </article>
  );
}
