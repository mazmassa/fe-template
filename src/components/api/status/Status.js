//STYLES
import "./status.css";

//EXTERNALS

//LOCALS
import { STATUS } from "../../../const/status/status";
import Loading from "../loading/Loading";
import Error from "../error/Error";

function Status({ status, error }) {
  if (status === STATUS.LOADING) {
    return <Loading />;
  } else if (status === STATUS.ERROR) {
    return <Error error={error} />;
  }
}

export default Status;
