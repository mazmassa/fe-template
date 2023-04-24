//STYLES

//EXTERNALS
import axios from "axios";
import { useQuery } from "react-query";

//LOCALS
import { BASE_API } from "../../config/env";
import StoreModel from "../../models/StoreModel";

function useResource(resource) {
  let url = `${BASE_API}/${resource}`;

  let Store = new StoreModel(resource);

  return useQuery(resource, async () => {
    const { data } = await axios.get(url);

    Store.load(data);

    return data;
  });
}

export default useResource;
