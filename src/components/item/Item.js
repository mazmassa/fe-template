//STYLES
import "./item.css";

//EXTERNALS
import { Link } from "react-router-dom";

//LOCALS

function Item({ path, title }) {
  return (
    <Link to={path}>
      <div data-testid="item-title" className="item">
        {title}
      </div>
    </Link>
  );
}

export default Item;
