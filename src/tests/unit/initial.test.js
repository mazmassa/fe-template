import { initials } from "../../util/initials";

describe("initials", () => {
  test("it should creates initials when two names are given", () => {
    expect(initials("Joe Doe")).toBe("JD");
  });

  test("it should creates initials when one name is given", () => {
    expect(initials("Joe")).toBeOneOf(["JJ", "JO", "JE"]);
  });
});
