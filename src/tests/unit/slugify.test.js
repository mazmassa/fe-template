import { slugify } from "../../util/slugify";

describe("slugify", () => {
  test("it should creates an slug", () => {
    expect(slugify("Joe Doe")).toBe("joe-doe");
  });

  test("it should creates initials when one name is given", () => {
    expect(slugify("Joe")).toBe("joe");
  });
});
