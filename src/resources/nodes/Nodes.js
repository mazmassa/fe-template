//STYLES
import "./nodes.css";

//EXTERNALS
import { Outlet } from "react-router-dom";

//LOCALS
import Avatar from "../../components/avatar/Avatar";
import useResource from "../../custom/api/useResource";
import Status from "../../components/api/status/Status";
import { useAppStore } from "../../store/store";

function Nodes() {
  //DEFAULTS AND PARAMS

  //NETWORK ACCESS
  const { status, data, error } = useResource("nodes");

  //DATA FLOW
  const { nodes, cars } = useAppStore();

  //LOCAL FUNCTIONS

  return (
    <div className="nodes">
      <div className="left">
        <Status status={status} error={error} />
        {data?.nodes.map(({ id, name }) => {
          return <Avatar key={id} path={`/nodes/${id}`} title={name} />;
        })}
        <br />
        -store-
        {nodes?.map(({ id, name }) => {
          return <Avatar key={id} path={`/nodes/${id}`} title={name} />;
        })}
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
}

export default Nodes;
