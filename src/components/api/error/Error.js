//STYLES
import "./error.css";

//EXTERNALS

//LOCALS

function Error({ error }) {
  return (
    <div className="error">
      <h3>Ohhuu! Something went wrong!</h3>
      <span>{error.message}</span>
    </div>
  );
}

export default Error;
