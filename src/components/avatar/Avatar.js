//STYLES
import "./avatar.css";

//EXTERNALS
import { Link } from "react-router-dom";

//LOCALS
import { initials } from "../../util/initials";

function Avatar({ path, title }) {
  return (
    <Link to={path}>
      <div className="avatar" data-testid="avatar">
        <div className="avatar-initials" data-testid="avatar-initial">
          {initials(title)}
        </div>
      </div>
    </Link>
  );
}

export default Avatar;
