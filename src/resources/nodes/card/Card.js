//STYLES
import "./card.css";

//EXTERNALS
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//LOCALS
import useResource from "../../../custom/api/useResource";
import Status from "../../../components/api/status/Status";

function Card() {
  //DEFAULTS AND PARAMS
  let { id, slug } = useParams();

  //NETWORK ACCESS
  const { isLoading, status, data, error } = useResource(`nodes/${id}/${slug}`);

  //DATA FLOW

  //LOCAL FUNCTIONS

  return (
    <div className="content">
      {isLoading ? (
        <Status status={status} error={error} />
      ) : (
        <div>
          {data?.node?.slug} - <Link to={`/nodes/${id}/update`}>edit</Link>
        </div>
      )}
    </div>
  );
}

export default Card;
