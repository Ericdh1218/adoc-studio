import Container from "../../../../components/ui/Container";
import Heading from "../../../../components/ui/Heading";
import Section from "../../../../components/ui/Section";
import Text from "../../../../components/ui/Text";

function Philosophy() {
  return (
    <Section className="border-t border-muted bg-background">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-xs tracking-[0.35em] uppercase text-secondary">
              Filosofía
            </p>

            <Heading as="h2" className="mt-6">
              Diseñamos con intención, no con improvisación.
            </Heading>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Text size="lg" color="secondary" className="max-w-2xl">
              En ADOC Studio entendemos la arquitectura como un proceso de
              precisión. Cada espacio nace de una idea, pero toma forma a través
              de decisiones claras: luz, proporción, materialidad y función.
            </Text>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <span className="font-display text-xs uppercase tracking-[0.3em] text-secondary">
                  01
                </span>
                <h3 className="mt-4 font-display text-xl uppercase">
                  Precisión
                </h3>
              </div>

              <div>
                <span className="font-display text-xs uppercase tracking-[0.3em] text-secondary">
                  02
                </span>
                <h3 className="mt-4 font-display text-xl uppercase">
                  Elegancia
                </h3>
              </div>

              <div>
                <span className="font-display text-xs uppercase tracking-[0.3em] text-secondary">
                  03
                </span>
                <h3 className="mt-4 font-display text-xl uppercase">
                  Confianza
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Philosophy;