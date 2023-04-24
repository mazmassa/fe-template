//STYLES
import "./menu.css";

//EXTERNALS
import { Link } from "react-router-dom";

//LOCALS
import Intl from "../../i18n/i18n";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">{Intl.t("menu.home")}</Link>
        </li>
        <li>
          <Link to="/nodes">{Intl.t("menu.nodes")}</Link>
        </li>
        <li>
          <Link to="/no">{Intl.t("menu.dont")}</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
