//STYLES

//EXTERNALS
import axios from "axios";
import { useMutation } from "react-query";

//LOCALS
import { BASE_API } from "../../config/env";
import StoreModel from "../../models/StoreModel";

function usePost(resource) {
  let url = `${BASE_API}/${resource}`;

  let Store = new StoreModel(
    resource /*, { keyForModel: {one: "car", all: "cars" }}*/
  );

  return useMutation(resource, async (payload) => {
    const { data } = await axios.post(url, payload);

    Store.save(data);

    return data;
  });
}

export default usePost;
