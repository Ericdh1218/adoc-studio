import Hero from "../features/home/components/hero";
import ProjectSelection from "../features/home/components/project-selection";
import Philosophy from "../features/home/components/philosophy";
import ServicesPreview from "../features/home/components/services-preview";
import Process from "../features/home/components/process";
import IdeaBrief from "../features/home/components/idea-brief";
import CTA from "../features/home/components/cta";

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