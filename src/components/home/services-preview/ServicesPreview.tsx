import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import Section from "../../ui/Section";
import Text from "../../ui/Text";
import Button from "../../ui/Button";

const services = [
  "Diseño arquitectónico",
  "Remodelación integral",
  "Diseño de interiores",
  "Diseño de iluminación",
  "Mobiliario a medida",
  "Conceptualización de espacios",
];

function ServicesPreview() {
  return (
    <Section className="border-t border-muted bg-background">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-xs tracking-[0.35em] uppercase text-secondary">
              Servicios
            </p>

            <Heading as="h2" className="mt-6">
              Soluciones para espacios con intención.
            </Heading>

            <Text color="secondary" className="mt-6 max-w-md">
              Acompañamos cada etapa del proyecto, desde la idea inicial hasta
              la definición espacial, material y funcional.
            </Text>

            <div className="mt-10">
              <Button variant="editorial">Ver servicios →</Button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t border-muted">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="flex flex-col gap-3 border-b border-muted py-7 md:flex-row md:items-center md:justify-between"
                >
                  <span className="font-display text-xs tracking-[0.3em] uppercase text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-display text-xl uppercase tracking-[0.12em] text-primary">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ServicesPreview;