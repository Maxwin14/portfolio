import { candidate } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="footer section-shell">
      <p>
        © {new Date().getFullYear()} {candidate.name}
      </p>
      <p>
        {candidate.location} · {candidate.remote}
      </p>
    </footer>
  );
}
