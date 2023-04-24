//STYLES
import "./update-node.css";

//EXTERNALS
import { useRef } from "react";
import { useParams } from "react-router-dom";

//LOCALS
import { useAppStore } from "../../../store/store";
import usePatch from "../../../custom/api/usePatch";
import { parseForm } from "../../../util/form";
import Intl from "../../../i18n/i18n";

function UpdateNode() {
  //DEFAULTS AND PARAMS
  const form = useRef();
  const { id } = useParams();

  //NETWORK ACCESS
  const { mutateAsync, isLoading } = usePatch(`nodes/${id}/update`);

  //DATA FLOW
  const { node } = useAppStore();

  //LOCAL FUNCTIONS
  async function handleSubmit(e) {
    e.preventDefault();
    await mutateAsync(parseForm(e));
  }

  return (
    <div className="update-node">
      <div className="title">Edit node</div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="input">
          <input
            required
            placeholder="name"
            name="name"
            type="text"
            defaultValue={node.name}
          />
        </div>
        <div className="input">
          <input
            required
            name="slug"
            placeholder="slug"
            type="text"
            defaultValue={node.slug}
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

export default UpdateNode;
