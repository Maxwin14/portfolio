import { candidate } from "@/data/portfolio";

const links = [
  ["Projects", "#projects"],
  ["Capabilities", "#capabilities"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

export function Navigation() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a
          className="wordmark"
          href="#top"
          aria-label={`${candidate.name}, home`}
        >
          MAXWIN LOW
        </a>
        <div className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
