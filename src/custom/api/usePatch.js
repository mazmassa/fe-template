//STYLES

//EXTERNALS
import axios from "axios";
import { useMutation } from "react-query";

//LOCALS
import { BASE_API } from "../../config/env";
import StoreModel from "../../models/StoreModel";

function usePatch(resource) {
  let url = `${BASE_API}/${resource}`;

  let Store = new StoreModel(resource);

  return useMutation(resource, async (payload) => {
    const { data } = await axios.patch(url, payload);

    Store.update(data);

    return data;
  });
}

export default usePatch;
