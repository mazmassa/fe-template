//STYLES
import "./new-node.css";

//EXTERNALS
import { useRef } from "react";

//LOCALS
import { parseForm } from "../../../util/form";
import usePost from "../../../custom/api/usePost";
import Intl from "../../../i18n/i18n";

function NewNode() {
  //DEFAULTS AND PARAMS
  const form = useRef();

  //NETWORK ACCESS
  const { mutateAsync, isLoading } = usePost("nodes/new");

  //DATA FLOW

  //LOCAL FUNCTIONS
  async function handleSubmit(e) {
    e.preventDefault();
    await mutateAsync(parseForm(e));
    handleReset();
  }

  function handleReset() {
    form.current.reset();
  }

  return (
    <div className="new-node">
      <div className="title">New node</div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="input">
          <input
            required
            placeholder="name"
            name="name"
            type="text"
            defaultValue=""
          />
        </div>
        <div className="input">
          <input
            required
            name="slug"
            placeholder="slug"
            type="text"
            defaultValue=""
          />
        </div>
        <input
          className="submit"
          type="submit"
          value={isLoading ? Intl.t("store.loading") : Intl.t("form.submit")}
          disabled={isLoading}
        />
      </form>
    </div>
  );
}

export default NewNode;
