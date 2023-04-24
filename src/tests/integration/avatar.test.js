import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Avatar from "../../components/avatar/Avatar";

test("it should renders the <Avatar>", () => {
  render(
    <Router>
      <Avatar path={"a/b"} title={"Jon Doe"} />
    </Router>
  );

  expect(screen.getByTestId("avatar")).toBeTruthy();
  expect(screen.getByTestId("avatar-initial").textContent).toBe("JD");
});
