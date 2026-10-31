import { ArrowLink } from './ArrowLink';
import { ContactHeading } from './ContactHeading';
import { ContactTopline } from './ContactTopline';

type ContactProps = {
  sectionId: string;
  titleId: string;
  topLine: string;
  availability: string;
  heading: string;
  headingEmphasis: string;
  email: string;
  emailHref: string;
};

export function Contact({
  sectionId,
  titleId,
  topLine,
  availability,
  heading,
  headingEmphasis,
  email,
  emailHref,
}: ContactProps) {
  return (
    <section className="contact section-pad" id={sectionId} aria-labelledby={titleId}>
      <ContactTopline prompt={topLine} availability={availability} />
      <ContactHeading titleId={titleId} heading={heading} emphasis={headingEmphasis} />
      <ArrowLink
        className="email-link"
        href={emailHref}
        icon={<span aria-hidden="true">↗</span>}
      >
        {email}
      </ArrowLink>
    </section>
  );
}

