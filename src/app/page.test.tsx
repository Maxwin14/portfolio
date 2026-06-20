import { render, screen, within } from "@testing-library/react";
import Home from "./page";

describe("portfolio homepage", () => {
  test("presents BankApp as the flagship before supporting sections", () => {
    render(<Home />);
    const main = screen.getByRole("main");
    expect(within(main).getByRole("heading", { level: 1 })).toHaveTextContent(
      /secure software/i,
    );
    expect(screen.getByTestId("featured-project")).toHaveTextContent(
      "BankApp Secure",
    );
    const featured = screen.getByTestId("featured-project");
    const projectsSection = screen
      .getByRole("heading", { name: /projects with practical scope/i })
      .closest("section");
    expect(
      featured.compareDocumentPosition(projectsSection!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  test("keeps CGPA and phone out of the hero", () => {
    render(<Home />);
    const hero = screen.getByTestId("hero");
    expect(hero).not.toHaveTextContent("3.27");
    expect(hero).not.toHaveTextContent("012-9661126");
  });

  test("provides skip navigation and clear primary actions", () => {
    render(<Home />);
    expect(
      screen.getByRole("link", { name: /skip to content/i }),
    ).toHaveAttribute("href", "#main-content");
    expect(
      within(screen.getByTestId("hero")).getByRole("link", {
        name: /email maxwin/i,
      }),
    ).toHaveAttribute("href", "mailto:maxwin140@gmail.com");
    expect(
      screen.getByRole("link", { name: /view bankapp on github/i }),
    ).toHaveAttribute("href", "https://github.com/Maxwin14/bankapp-secure");
  });

  test("labels Campus Security as a team project and Maxwin as module lead", () => {
    render(<Home />);
    const card = screen.getByTestId("project-campus-security");
    expect(card).toHaveTextContent(/university team project/i);
    expect(card).toHaveTextContent(/student module lead/i);
  });

  test("shows CGPA only in About and makes phone secondary", () => {
    render(<Home />);
    const contact = screen.getByTestId("contact");
    expect(screen.getByTestId("about")).toHaveTextContent("CGPA 3.27");
    expect(
      within(contact).getByRole("link", { name: /email maxwin/i }),
    ).toHaveClass("button-primary");
    expect(
      within(contact).getByRole("link", { name: /github profile/i }),
    ).toHaveClass("button-primary");
    expect(
      within(contact).getByRole("link", { name: /call maxwin/i }),
    ).toHaveClass("text-link");
  });

  test("presents only the current live Ford project", () => {
    render(<Home />);
    const fordCard = screen.getByTestId("project-ford-malaysia");

    expect(
      within(fordCard).getByRole("heading", {
        name: "Ford Malaysia Lead Generation Landing Page",
      }),
    ).toBeInTheDocument();
    expect(fordCard).toHaveTextContent(
      "Personal frontend project · Landing page and enquiry flow",
    );
    expect(
      within(fordCard).queryByRole("link", { name: /github/i }),
    ).not.toBeInTheDocument();
    expect(
      within(fordCard).getByRole("link", {
        name: /view ford malaysia lead generation landing page live/i,
      }),
    ).toHaveAttribute("href", "https://estter-ford-malaysia.netlify.app/");
  });
});
