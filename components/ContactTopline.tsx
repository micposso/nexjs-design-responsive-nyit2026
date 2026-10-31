export type ContactToplineProps = {
  prompt: string;
  availability: string;
};

export function ContactTopline({ prompt, availability }: ContactToplineProps) {
  return (
    <div className="contact-topline">
      <span>{prompt}</span>
      <span>{availability}</span>
    </div>
  );
}
