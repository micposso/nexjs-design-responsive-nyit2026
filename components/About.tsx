const services = ["Brand strategy", "Visual identity", "Digital design", "Art direction", "Packaging", "Campaigns"];

export function About() {
  return (
    <section className="about section-pad" id="about" aria-labelledby="about-title">
      <div className="section-heading about-heading">
        <div>
          <span className="section-index">02</span>
          <h2 id="about-title">Small by design.</h2>
        </div>
        <p>Brooklyn-based, working everywhere.</p>
      </div>
      <div className="about-grid">
        <p className="about-lead">Strategy to screen, we make expressive work that feels clear, human, and built to last.</p>
        <div className="about-copy">
          <p>We partner directly with founders and in-house teams from the earliest idea through launch. Every engagement stays close, collaborative, and free of unnecessary layers.</p>
          <div className="service-list" aria-label="Services">
            {services.map((service, index) => (
              <div key={service}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
