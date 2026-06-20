import { projects } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects with practical scope"
        intro="Full-stack, frontend, and team-based systems work."
      />
      <div className="project-grid">
        {projects
          .filter((project) => !project.featured)
          .map((project) => (
            <article
              key={project.slug}
              data-testid={`project-${project.slug}`}
              className="project-card"
            >
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className="ownership">
                <strong>{project.ownership}</strong> · {project.role}
              </p>
              <ul className="evidence-list">
                {project.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tag-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="project-links">
                {project.githubUrl ? (
                  <a
                    className="text-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    GitHub
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    className="text-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} live`}
                  >
                    Live site
                  </a>
                ) : null}
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
