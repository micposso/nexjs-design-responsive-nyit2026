export type ContactHeadingProps = {
  titleId: string;
  heading: string;
  emphasis: string;
};

export function ContactHeading({ titleId, heading, emphasis }: ContactHeadingProps) {
  return (
    <h2 id={titleId}>
      {heading}
      <br />
      <em>{emphasis}</em>
    </h2>
  );
}
