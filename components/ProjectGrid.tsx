import arcCenter from "@/public/projects/arc-center.jpg";
import fieldNotes from "@/public/projects/field-notes.jpg";
import formaFashion from "@/public/projects/forma-fashion.jpg";
import goodDayCoffee from "@/public/projects/good-day-coffee.jpg";
import kinSkin from "@/public/projects/kin-skin.jpg";
import softObjects from "@/public/projects/soft-objects.jpg";
import solaraHouse from "@/public/projects/solara-house.jpg";
import wanderApp from "@/public/projects/wander-app.jpg";
import { ProjectCard } from "./ProjectCard";

const projects = [
  { title: "Solara House", discipline: "Hospitality · Brand world", year: "2026", image: solaraHouse, alt: "Sun-washed Mediterranean courtyard with a terracotta lounge chair" },
  { title: "Kin Skin", discipline: "Beauty · Packaging", year: "2026", image: kinSkin, alt: "Frosted skincare bottles arranged with green leaves on pale stone" },
  { title: "Forma", discipline: "Fashion · Art direction", year: "2025", image: formaFashion, alt: "Sculptural folds of cobalt and coral fabric" },
  { title: "Wander", discipline: "Travel · Digital product", year: "2025", image: wanderApp, alt: "Two phones presenting a colorful Mediterranean travel interface" },
  { title: "Good Day Coffee", discipline: "Food & drink · Packaging", year: "2025", image: goodDayCoffee, alt: "Coffee packaging and a ceramic mug in warm morning light" },
  { title: "Field Notes", discipline: "Culture · Identity", year: "2024", image: fieldNotes, alt: "Abstract geometric print pieces in red, blue, yellow, and black" },
  { title: "Soft Objects", discipline: "Homeware · Campaign", year: "2024", image: softObjects, alt: "Coral ceramic table lamp and cobalt glass object" },
  { title: "Arc Center", discipline: "Arts · Wayfinding", year: "2024", image: arcCenter, alt: "Modern gallery corridor with coral and blue wayfinding sculptures" },
];

export function ProjectGrid() {
  return (
    <section className="work section-pad" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <span className="section-index">01</span>
          <h2 id="work-title">Selected work</h2>
        </div>
        <p>Eight recent collaborations across brand, product, and place.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
      </div>
    </section>
  );
}
