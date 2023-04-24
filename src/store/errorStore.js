//STYLES

//EXTERNALS

//LOCALS

const errorStore = (set) => ({
  errors: [],

  setError: (error) =>
    set((prevState) => {
      return { errors: [...prevState.errors, error] };
    }),

  dropErrors: () => set({ errors: [] }),
});

export default errorStore;
