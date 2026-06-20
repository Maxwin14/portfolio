import { capabilities, candidate, projects } from "./portfolio";

describe("portfolio content", () => {
  test("keeps CGPA out of hero content", () => {
    expect(candidate.hero).not.toContain("3.27");
    expect(candidate.education.cgpa).toBe("3.27");
  });

  test("makes BankApp the only flagship project", () => {
    expect(
      projects.filter((project) => project.featured).map((project) => project.slug),
    ).toEqual(["bankapp-secure"]);
  });

  test("states team ownership for Campus Security", () => {
    const campus = projects.find(
      (project) => project.slug === "campus-security",
    );
    expect(campus?.ownership).toMatch(/team project/i);
    expect(campus?.role).toBe("Student module lead");
  });

  test("supports every target role family with evidence", () => {
    expect(capabilities).toHaveLength(4);
    for (const capability of capabilities) {
      expect(capability.evidence.length).toBeGreaterThan(0);
    }
  });
});
