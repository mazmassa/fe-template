import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Item from "../../components/item/Item";

test("it should renders the <Item>", () => {
  render(
    <Router>
      <Item path={"a/b"} title={"Some Title"} />
    </Router>
  );

  expect(screen.getByTestId("item-title").textContent).toBe("Some Title");
  expect(screen.getByText("Some Title").closest("a")).toHaveAttribute(
    "href",
    "/a/b"
  );
});
