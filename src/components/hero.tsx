import { candidate } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      data-testid="hero"
      className="hero section-shell"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <p className="eyebrow">
          Software Engineering student · Kuala Lumpur
        </p>
        <h1 id="hero-title">{candidate.hero}</h1>
        <p className="hero-intro">{candidate.introduction}</p>
        <div className="action-row">
          <a className="button button-primary" href="#featured-project">
            Explore my work
          </a>
          <a
            className="button button-secondary"
            href={`mailto:${candidate.email}`}
            aria-label="Email Maxwin"
          >
            Email me
          </a>
        </div>
      </div>
      <aside className="hero-facts" aria-label="Internship details">
        <div>
          <span>Available</span>
          <strong>{candidate.availability}</strong>
        </div>
        <div>
          <span>Location</span>
          <strong>{candidate.location}</strong>
          <small>{candidate.remote}</small>
        </div>
        <div>
          <span>Core toolkit</span>
          <strong>Java · Spring Boot · React · MySQL</strong>
        </div>
      </aside>
    </section>
  );
}
