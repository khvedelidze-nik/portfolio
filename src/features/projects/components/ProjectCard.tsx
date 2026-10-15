import type { ProjectInterface } from "../interfaces/ProjectInterface";
import LinkBtn from "@/components/ui/LinkBtn";
import NoImage from "./NoImage";
import ProjectImage from "./ProjectImage";

interface CardProps {
  data: ProjectInterface;
}

const ProjectCard = ({ data }: CardProps) => {
  const hasGithubLink = data.links.github && data.links.github.trim() !== "";
  const hasDemoLink = data.links.demo && data.links.demo.trim() !== "";

  return (
    <article
      className="group border-border bg-card hover:bg-cardHover text-text relative flex w-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:shadow-lg hover:border-accent/30 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-bg"
      tabIndex={0}
    >
      <div className="relative flex flex-col gap-3">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-card/50">
          {data.image ? (
            <ProjectImage path={data.image} alt={`Screenshot of ${data.name} project`} />
          ) : (
            <NoImage />
          )}
        </div>

        {data.name && (
          <h3 className="text-text text-xl font-semibold sm:text-2xl group-hover:text-accent transition-colors">
            {data.name}
          </h3>
        )}

        {data.description && (
          <p className="text-muted text-base leading-relaxed clamp-3">
            {data.description}
          </p>
        )}

        {data.tech && data.tech.length > 0 && (
          <div className="flex flex-wrap gap-2" aria-label="Technologies used">
            {data.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium bg-cardHover text-accent border border-accent/30 rounded-full transition-colors group-hover:border-accent group-hover:bg-accent/10"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {(hasGithubLink || hasDemoLink) && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          {hasGithubLink && (
            <LinkBtn
              href={data.links.github}
              icon="/icons/github_black.png"
              iconAlt="GitHub"
              variant="secondary"
              className="flex-1 sm:flex-initial justify-center min-w-30"
            >
              GitHub
            </LinkBtn>
          )}
          {hasDemoLink && (
            <LinkBtn
              href={data.links.demo}
              icon="/icons/github_black.png"
              iconAlt="Live demo"
              variant="primary"
              className="flex-1 sm:flex-initial justify-center min-w-30"
            >
              Live Demo
            </LinkBtn>
          )}
          {!hasGithubLink && !hasDemoLink && (
            <span className="text-muted text-sm italic flex-1 text-center py-2">
              Links coming soon
            </span>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;