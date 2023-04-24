//STYLES

//EXTERNALS
import { create } from "zustand";

//LOCALS
import messageStore from "./messageStore";
import errorStore from "./errorStore";
import nodeStore from "./nodeStore";
import carStore from "./carStore";
import configStore from "./configStore";

export const useAppStore = create((...obj) => ({
  ...carStore(...obj),
  ...nodeStore(...obj),
  ...messageStore(...obj),
  ...errorStore(...obj),
}));

export const useConfigStore = create((...obj) => ({
  ...configStore(...obj),
}));
