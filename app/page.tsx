import { site } from "@/data/site";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      {/* A seção só existe quando há projetos em `data/site.ts`. */}
      {site.projects.length > 0 && <Projects />}
      <Skills />
      <Contact />
    </>
  );
}
