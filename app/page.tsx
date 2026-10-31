import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import arcCenter from "@/public/projects/arc-center.jpg";
import fieldNotes from "@/public/projects/field-notes.jpg";
import formaFashion from "@/public/projects/forma-fashion.jpg";
import goodDayCoffee from "@/public/projects/good-day-coffee.jpg";
import kinSkin from "@/public/projects/kin-skin.jpg";
import softObjects from "@/public/projects/soft-objects.jpg";
import solaraHouse from "@/public/projects/solara-house.jpg";
import wanderApp from "@/public/projects/wander-app.jpg";

const projects = [
  { title: "Solara House", discipline: "Hospitality · Brand world", year: "2026", image: solaraHouse, alt: "Sun-washed Mediterranean courtyard with a terracotta lounge chair", href: "#contact", viewLabel: "View", openSymbol: "↗" },
  { title: "Kin Skin", discipline: "Beauty · Packaging", year: "2026", image: kinSkin, alt: "Frosted skincare bottles arranged with green leaves on pale stone", href: "#contact", viewLabel: "View", openSymbol: "↗" },
  { title: "Forma", discipline: "Fashion · Art direction", year: "2025", image: formaFashion, alt: "Sculptural folds of cobalt and coral fabric", href: "#contact", viewLabel: "View", openSymbol: "↗" },
  { title: "Wander", discipline: "Travel · Digital product", year: "2025", image: wanderApp, alt: "Two phones presenting a colorful Mediterranean travel interface", href: "#contact", viewLabel: "View", openSymbol: "↗" },
  { title: "Good Day Coffee", discipline: "Food & drink · Packaging", year: "2025", image: goodDayCoffee, alt: "Coffee packaging and a ceramic mug in warm morning light", href: "#contact", viewLabel: "View", openSymbol: "↗" },
  { title: "Field Notes", discipline: "Culture · Identity", year: "2024", image: fieldNotes, alt: "Abstract geometric print pieces in red, blue, yellow, and black", href: "#contact", viewLabel: "View", openSymbol: "↗" },
  { title: "Soft Objects", discipline: "Homeware · Campaign", year: "2024", image: softObjects, alt: "Coral ceramic table lamp and cobalt glass object", href: "#contact", viewLabel: "View", openSymbol: "↗" },
  { title: "Arc Center", discipline: "Arts · Wayfinding", year: "2024", image: arcCenter, alt: "Modern gallery corridor with coral and blue wayfinding sculptures", href: "#contact", viewLabel: "View", openSymbol: "↗" },
];

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const brand = {
  mark: "m",
  name: "Mira Studio",
  href: "#top",
};

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <Header
        brandMark={brand.mark}
        brandName={brand.name}
        brandHref={brand.href}
        brandAriaLabel={`${brand.name} home`}
        navigationAriaLabel="Main navigation"
        navigation={navigation}
        cta={{ label: "Let's talk", href: "#contact" }}
      />
      <main>
        <Hero
          titleId="hero-title"
          kicker="Independent creative studio"
          heading={<>Designing brands<br />people want to <em>stay with.</em></>}
          description="Mira is a small, senior-led studio creating warm identities, digital experiences, and thoughtful spaces for ambitious people."
          scrollLabel="Explore selected work"
          scrollHref="#work"
          scrollSymbol="↓"
        />
        <ProjectGrid
          sectionId="work"
          sectionIndex="01"
          titleId="work-title"
          title="Selected work"
          description="Eight recent collaborations across brand, product, and place."
          projects={projects}
        />
        <About
          sectionId="about"
          sectionIndex="02"
          titleId="about-title"
          title="Small by design."
          location="Brooklyn-based, working everywhere."
          lead="Strategy to screen, we make expressive work that feels clear, human, and built to last."
          description="We partner directly with founders and in-house teams from the earliest idea through launch. Every engagement stays close, collaborative, and free of unnecessary layers."
          servicesLabel="Services"
          services={["Brand strategy", "Visual identity", "Digital design", "Art direction", "Packaging", "Campaigns"]}
        />
        <Contact
          sectionId="contact"
          titleId="contact-title"
          topLine="Have a project in mind?"
          availability="Available for select collaborations"
          heading="Let's make something"
          headingEmphasis="worth remembering."
          email="hello@mirastudio.design"
          emailHref="mailto:hello@mirastudio.design"
        />
      </main>
      <Footer
        brandMark={brand.mark}
        brandName={brand.name}
        brandHref={brand.href}
        description="Independent design practice · Brooklyn / Worldwide"
        links={[
          { label: "Email", href: "mailto:hello@mirastudio.design" },
          { label: "Instagram", href: "#work" },
          { label: "LinkedIn", href: "#work" },
        ]}
      />
    </div>
  );
}
