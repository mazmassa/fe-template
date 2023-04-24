//STYLES

//EXTERNALS
import { persist, createJSONStorage } from "zustand/middleware";

//LOCALS

const configStore = persist(
  (set) => ({
    lang: "en_US",

    setLang: (lang) => set({ lang: lang }),

    dropLang: () => set({ lang: "en_US" }),
  }),
  {
    name: "config-store",
    storage: createJSONStorage(() => localStorage),
  }
);

export default configStore;
