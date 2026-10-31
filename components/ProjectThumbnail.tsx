import Image, { type StaticImageData } from 'next/image';

export type ProjectThumbnailProps = {
  title: string;
  image: StaticImageData;
  alt: string;
  href: string;
  viewLabel: string;
  openSymbol: string;
};

export function ProjectThumbnail({ title, image, alt, href, viewLabel, openSymbol }: ProjectThumbnailProps) {
  return (
    <a className="project-image" href={href} aria-label={`${viewLabel} ${title}`}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 719px) 100vw, (max-width: 1199px) 50vw, 25vw"
      />
      <span className="project-open" aria-hidden="true">{openSymbol}</span>
    </a>
  );
}
