import Image from "next/image";
import { projects } from "@/data/portfolio";

export function FeaturedProject() {
  const project = projects.find((item) => item.featured);

  if (!project) return null;

  return (
    <section
      id="featured-project"
      data-testid="featured-project"
      className="featured section-shell"
      aria-labelledby="featured-title"
    >
      <div className="featured-visual">
        {project.image ? (
          <Image
            src={project.image}
            alt="BankApp Secure dashboard"
            width={1280}
            height={889}
            priority
          />
        ) : null}
      </div>
      <div className="featured-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h2 id="featured-title">{project.title}</h2>
        <p>{project.summary}</p>
        <ul>
          {project.evidence.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="tag-list" aria-label="Technologies">
          {project.technologies.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.githubUrl ? (
          <a
            className="text-link"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="View BankApp on GitHub"
          >
            View source on GitHub
          </a>
        ) : null}
      </div>
    </section>
  );
}
