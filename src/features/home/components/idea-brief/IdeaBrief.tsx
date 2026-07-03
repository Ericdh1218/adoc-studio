import Button from "../../../../components/ui/Button";
import Container from "../../../../components/ui/Container";
import Heading from "../../../../components/ui/Heading";
import Section from "../../../../components/ui/Section";
import Text from "../../../../components/ui/Text";
import Input from "../../../../components/ui/Input";
import Textarea from "../../../../components/ui/Textarea";
import Select from "../../../../components/ui/Select";

function IdeaBrief() {
  return (
    <Section className="border-t border-muted bg-surface">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-xs tracking-[0.35em] uppercase text-secondary">
              Consulta inicial
            </p>

            <Heading as="h2" className="mt-6">
              Descríbenos tu idea.
            </Heading>

            <Text color="secondary" className="mt-6 max-w-sm">
              Cada proyecto comienza con una conversación. Cuéntanos qué espacio
              quieres transformar y nosotros te ayudamos a darle forma.
            </Text>
          </div>

          <form onSubmit={(event) => event.preventDefault()} className="lg:col-span-8 grid grid-cols-1 gap-8 md:grid-cols-2" >
            <Input
              id="name"
              label="¿Cómo te llamas?"
              placeholder="Tu nombre completo"
              required
            />

            <Input
              id="email"
              label="¿Dónde podemos escribirte?"
              type="email"
              placeholder="correo@ejemplo.com"
              helperText="Usaremos este correo solo para responder tu consulta."
              required
            />

            <div className="flex flex-col gap-3 md:col-span-2">
              <label className="font-display text-xs uppercase tracking-[0.25em] text-text-secondary">
                Tipo de proyecto
              </label>
              <div className="md:col-span-2">
                <Select
                  id="project-type"
                  label="¿Qué tipo de proyecto tienes en mente?"
                  placeholder="Selecciona el punto de partida"
                  options={[
                    { label: "Iluminación", value: "lighting" },
                    { label: "Remodelación", value: "remodeling" },
                    { label: "Mobiliario", value: "furniture" },
                    { label: "Cocina", value: "kitchen" },
                    { label: "Otro proyecto", value: "other" },
                  ]}
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="md:col-span-2">
                <Textarea
                  id="idea"
                  label="Cuéntanos cómo imaginas este espacio"
                  placeholder="Háblanos del lugar, la sensación que buscas, lo que quieres cambiar o construir..."
                  helperText="Entre más detalles nos compartas, mejor podremos orientar la propuesta."
                  rows={5}
                />
              </div>
            </div>

            <div className="md:col-span-2 flex justify-start md:justify-end">
              <Button type="submit" variant="editorial">
                Enviar consulta →
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}

export default IdeaBrief;