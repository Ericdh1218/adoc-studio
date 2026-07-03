import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import { FadeIn } from "../../animations";

function HeroContent() {
  return (
    <div className="flex flex-col justify-center">
      <FadeIn>
        <p className="font-display text-xs tracking-[0.35em] uppercase text-secondary mb-8">
          Cada proyecto nace de una idea.
          <br />
          Nosotros la convertimos en arquitectura.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Heading as="h1" className="max-w-3xl">
          La arquitectura comienza mucho antes del primer ladrillo.
        </Heading>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Text as="p" size="lg" color="secondary" className="mt-8 max-w-xl">
          Creamos espacios con intención, precisión y elegancia para transformar
          ideas en lugares memorables.
        </Text>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-10">
          <Button variant="editorial">Iniciar consulta →</Button>
        </div>
      </FadeIn>
    </div>
  );
}

export default HeroContent;