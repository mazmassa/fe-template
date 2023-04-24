import Avatar from "./Avatar";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Avatar>", () => {
  it("mounts", () => {
    cy.mount(
      <Router>
        <Avatar path={"a/b"} title={"Jon Doe"} />
      </Router>
    );
  });
});
