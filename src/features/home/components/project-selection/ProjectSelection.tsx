import Container from "../../../../components/ui/Container";
import Heading from "../../../../components/ui/Heading";
import Section from "../../../../components/ui/Section";
import Text from "../../../../components/ui/Text";
import ProjectCard from "./ProjectCard";

const projectTypes = [
  {
    code: "01",
    title: "Iluminación",
    description: "Diseño lumínico para crear atmósferas precisas, funcionales y elegantes.",
  },
  {
    code: "02",
    title: "Remodelación",
    description: "Transformación de espacios existentes con una visión arquitectónica clara.",
  },
  {
    code: "03",
    title: "Mobiliario",
    description: "Piezas y soluciones diseñadas para integrarse con intención al espacio.",
  },
  {
    code: "04",
    title: "Cocina",
    description: "Diseño de cocinas funcionales, sobrias y cuidadosamente proporcionadas.",
  },
  {
    code: "05",
    title: "Otro proyecto",
    description: "Cuéntanos tu idea y encontraremos la mejor forma de convertirla en arquitectura.",
  },
];

function ProjectSelection() {
  return (
    <Section className="border-t border-muted">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-xs tracking-[0.35em] uppercase text-secondary">
              Selección de proyecto
            </p>

            <Heading as="h2" className="mt-6">
              ¿Qué espacio quieres transformar?
            </Heading>

            <Text color="secondary" className="mt-6 max-w-sm">
              Nos especializamos en proyectos donde cada decisión tiene intención,
              proporción y detalle.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
            {projectTypes.map((project) => (
              <ProjectCard
                key={project.code}
                code={project.code}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ProjectSelection;