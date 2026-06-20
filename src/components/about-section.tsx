import { candidate } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" data-testid="about" className="section-shell about">
      <SectionHeading
        eyebrow="About"
        title="Learning deeply, working practically"
        intro="A software engineering student building technical depth alongside real customer-facing experience."
      />
      <div className="about-grid">
        <article>
          <h3>Education</h3>
          <p>
            <strong>{candidate.education.degree}</strong>
          </p>
          <p>{candidate.education.institution}</p>
          <p>
            {candidate.education.graduation} · CGPA {candidate.education.cgpa}
          </p>
        </article>
        <article>
          <h3>Experience</h3>
          <p>
            <strong>
              {candidate.workExperience.role}, {candidate.workExperience.company}
            </strong>
          </p>
          <p>{candidate.workExperience.period}</p>
          <p>{candidate.workExperience.summary}</p>
        </article>
        <article>
          <h3>Languages</h3>
          <ul>
            {candidate.languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
