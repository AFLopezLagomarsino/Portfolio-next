import About from "@/components/About";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/Herosection";
import NavBar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#003140]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <About />
      <ProjectsSection />
      <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
