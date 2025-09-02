import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import CurrentRole from "@/components/CurrentRole";
import EarlyCareer from "@/components/EarlyCareer";
import EducationCarousel from "@/components/EducationCarousel";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <main className="min-h-screen relative">

      <ScrollProgress />
      <Header />
      <Hero />
      <TechnicalExpertise />
      <CurrentRole />
      <Projects />
      <EarlyCareer />
      <EducationCarousel />
      <Contact />
    </main>
  );
};

export default Index;
