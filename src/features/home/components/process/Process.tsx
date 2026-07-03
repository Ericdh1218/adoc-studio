import Container from "../../../../components/ui/Container";
import Heading from "../../../../components/ui/Heading";
import Section from "../../../../components/ui/Section";
import Text from "../../../../components/ui/Text";

const steps = [
  {
    number: "01",
    title: "Escuchamos",
    description:
      "Conocemos tu idea, necesidades, estilo de vida y objetivos del espacio.",
  },
  {
    number: "02",
    title: "Proyectamos",
    description:
      "Transformamos la intención inicial en una propuesta arquitectónica clara.",
  },
  {
    number: "03",
    title: "Desarrollamos",
    description:
      "Definimos materiales, proporciones, detalles y soluciones funcionales.",
  },
  {
    number: "04",
    title: "Materializamos",
    description:
      "Acompañamos el proceso para que el resultado mantenga la visión original.",
  },
];

function Process() {
  return (
    <Section className="border-t border-muted bg-surface">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-xs tracking-[0.35em] uppercase text-secondary">
              Proceso
            </p>

            <Heading as="h2" className="mt-6">
              De la idea al espacio.
            </Heading>

            <Text color="secondary" className="mt-6 max-w-sm">
              Trabajamos cada proyecto con una metodología clara para cuidar la
              intención desde el primer trazo hasta el resultado final.
            </Text>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 border-t border-muted">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="grid grid-cols-1 gap-6 border-b border-muted py-10 md:grid-cols-12"
                >
                  <span className="font-display text-xs tracking-[0.35em] uppercase text-secondary md:col-span-2">
                    {step.number}
                  </span>

                  <h3 className="font-display text-2xl uppercase md:col-span-4">
                    {step.title}
                  </h3>

                  <Text color="secondary" className="md:col-span-6">
                    {step.description}
                  </Text>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Process;