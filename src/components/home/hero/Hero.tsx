import Container from "../../ui/Container";
import Section from "../../ui/Section";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import { ScaleIn } from "../../animations";

function Hero() {
  return (
    <Section className="min-h-screen flex items-center pt-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <HeroContent />
          </div>

          <div className="lg:col-span-7">
            <ScaleIn delay={0.25}>
              <HeroImage />
            </ScaleIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;