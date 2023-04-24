import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the app", () => {
  render(
    <Router>
      <App />
    </Router>
  );

  expect(global.window.location.pathname).toEqual("/");
});
