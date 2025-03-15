import Navigation from "@/components/layout/navigation";
import Welcome from "@/components/sections/welcome";
import Portfolio from "@/components/sections/portfolio";
import TechStack from "@/components/sections/tech-stack";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#F5F5F5]">
        <Welcome />
        <Portfolio />
        <TechStack />
        <Experience />
        <Education />
        <About />
        <Contact />
      </main>
    </>
  );
}