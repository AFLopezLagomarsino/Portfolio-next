import About from "@/components/About";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/Herosection";
import NavBar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 min-h-screen min-w-screen max-w-screen flex-col bg-[#003140]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <EmailSection />
        </section>
      </div>
      <Footer />
    </main>
  );
}
