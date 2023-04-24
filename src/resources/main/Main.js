//STYLES
import "./main.css";

//EXTERNALS
import { Outlet } from "react-router-dom";

//LOCALS
import NewButton from "../../components/new-button/NewButton";
import Menu from "../../components/menu/Menu";

function Main() {
  return (
    <div className="main">
      <Menu />
      <div className="outlet">
        <Outlet />
      </div>
      <NewButton />
    </div>
  );
}

export default Main;
