//STYLES
import "./node.css";

//EXTERNALS
import { useParams } from "react-router-dom";

//LOCALS
import useResource from "../../../custom/api/useResource";
import Status from "../../../components/api/status/Status";
import { Outlet } from "react-router-dom";
import Item from "../../../components/item/Item";

function Node() {
  //DEFAULTS AND PARAMS
  const { id } = useParams();

  //NETWORK ACCESS
  const { status, data, error } = useResource(`nodes/${id}`);

  //DATA FLOW

  //LOCAL FUNCTIONS

  return (
    <div className="node">
      <div className="details" data-testid="details">
        <Status status={status} error={error} />

        <div className="title" data-testid="title">
          <Item path={data?.node?.slug} title={data?.node?.name} />
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Node;
