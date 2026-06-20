import { capabilities } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section-shell">
      <SectionHeading
        eyebrow="Role fit"
        title="Useful across the software lifecycle"
        intro="Evidence aligned to the internship roles I am pursuing."
      />
      <div className="capability-grid">
        {capabilities.map((capability) => (
          <article key={capability.title} className="capability-card">
            <h3>{capability.title}</h3>
            <p className="role-list">{capability.roles.join(" · ")}</p>
            <ul>
              {capability.evidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
