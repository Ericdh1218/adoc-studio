import { Reveal } from "../../animations";
type ProjectCardProps = {
  code: string;
  title: string;
  description: string;
};

function ProjectCard({ code, title, description }: ProjectCardProps) {
  return (
    <article
      className="
    group
    relative
    min-h-[260px]
    overflow-hidden
    border
    border-muted
    bg-surface
    p-8
    transition-all
    duration-500
    ease-out

    hover:-translate-y-2
    hover:border-secondary
    hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
  "
    >
      <div className="flex h-full flex-col justify-between">
        <Reveal>
          <span className=" font-display text-xs tracking-[0.35em] uppercase text-secondary transition-all duration-500 group-hover:tracking-[0.5em]">
            {code}
          </span>
        </Reveal>
        <div>
          <Reveal>
            <h3 className="font-display text-2xl uppercase tracking-[0.12em] text-primary transition-colors duration-500 group-hover:text-secondary">
              {title}
            </h3>
          </Reveal>
          <Reveal>
            <p className="mt-4 max-w-sm text-text-secondary opacity-70 transition-opacity duration-300 group-hover:opacity-100">
              {description}
            </p>
          </Reveal>
        </div>
      </div>
      <div
  className="
    absolute
    bottom-0
    left-0
    h-[2px]
    w-0
    bg-secondary
    transition-all
    duration-500
    group-hover:w-full
  "
/>
    </article>
  );
}

export default ProjectCard;