import { SectionHeading } from './SectionHeading';
import { ServiceList } from './ServiceList';

type AboutProps = {
  sectionId: string;
  sectionIndex: string;
  titleId: string;
  title: string;
  location: string;
  lead: string;
  description: string;
  servicesLabel: string;
  services: string[];
};

export function About({
  sectionId,
  sectionIndex,
  titleId,
  title,
  location,
  lead,
  description,
  servicesLabel,
  services,
}: AboutProps) {
  return (
    <section className="about section-pad" id={sectionId} aria-labelledby={titleId}>
      <SectionHeading
        className="about-heading"
        sectionIndex={sectionIndex}
        titleId={titleId}
        title={title}
        description={location}
      />
      <div className="about-grid">
        <p className="about-lead">{lead}</p>
        <div className="about-copy">
          <p>{description}</p>
          <ServiceList services={services} ariaLabel={servicesLabel} />
        </div>
      </div>
    </section>
  );
}
