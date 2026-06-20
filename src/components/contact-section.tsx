import { candidate } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section
      id="contact"
      data-testid="contact"
      className="section-shell contact"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">Contact</p>
      <h2 id="contact-title">Let&apos;s discuss an internship opportunity.</h2>
      <p>Email and GitHub are the best ways to reach me.</p>
      <div className="action-row">
        <a
          className="button button-primary"
          href={`mailto:${candidate.email}`}
          aria-label="Email Maxwin"
        >
          Email Maxwin
        </a>
        <a
          className="button button-primary"
          href={candidate.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          GitHub profile
        </a>
        <a
          className="button button-secondary"
          href="/resume/maxwin-low-current-resume.pdf"
        >
          View current resume
        </a>
      </div>
      <a
        className="text-link phone-link"
        href={`tel:${candidate.phone.replace(/-/g, "")}`}
        aria-label="Call Maxwin"
      >
        {candidate.phone}
      </a>
    </section>
  );
}
