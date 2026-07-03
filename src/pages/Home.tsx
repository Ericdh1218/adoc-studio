import Hero from "../components/home/hero";
import ProjectSelection from "../components/home/project-selection";
import Philosophy from "../components/home/philosophy";
import ServicesPreview from "../components/home/services-preview";
import Process from "../components/home/process";
import IdeaBrief from "../components/home/idea-brief";
import CTA from "../components/home/cta";

function Home() {
  return (
    <>
      <Hero />
      <ProjectSelection />
      <Philosophy />
      <ServicesPreview />
      <Process />
      <IdeaBrief />
      <CTA/>
    </>
  );
}

export default Home;