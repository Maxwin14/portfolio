import { siteMetadata } from "@/data/site-metadata";

test("uses recruiter-focused metadata", () => {
  expect(siteMetadata.title).toBe(
    "Maxwin Low | Software Engineering Internship Portfolio",
  );
  expect(siteMetadata.description).toMatch(/software engineering student/i);
});
