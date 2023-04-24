//STYLES
import "./new-button.css";

//EXTERNALS
import { Link } from "react-router-dom";

//LOCALS

function NewButton() {
  return (
    <Link className="new" to="/nodes/new">
      <div className="new-button" data-testid="new-node">
        +
      </div>{" "}
    </Link>
  );
}

export default NewButton;
