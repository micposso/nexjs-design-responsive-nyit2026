import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <Header />
      <main>
        <Hero />
        <ProjectGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
