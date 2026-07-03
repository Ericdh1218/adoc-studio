import Button from "../../../../components/ui/Button";
import Container from "../../../../components/ui/Container";
import Heading from "../../../../components/ui/Heading";
import Section from "../../../../components/ui/Section";
import Text from "../../../../components/ui/Text";

function CTA() {
  return (
    <Section className="border-t border-muted bg-primary text-white">
      <Container>
        <div className="max-w-4xl">
          <p className="font-display text-xs tracking-[0.35em] uppercase text-secondary">
            Próximo paso
          </p>

          <Heading as="h2" className="mt-6 text-white">
            Hagamos que tu idea tome forma.
          </Heading>

          <Text className="mt-6 max-w-2xl text-white/70" size="lg">
            Cuéntanos qué quieres transformar. Nosotros convertiremos esa visión
            en una propuesta arquitectónica clara, elegante y funcional.
          </Text>

          <div className="mt-10">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Iniciar consulta →
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default CTA;