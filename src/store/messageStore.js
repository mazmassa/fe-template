//STYLES

//EXTERNALS

//LOCALS

const messageStore = (set) => ({
  messages: [],

  setMessage: (message) =>
    set((prevState) => {
      return { messages: [...prevState.messages, message] };
    }),

  dropMessages: () => set({ messages: [] }),
});

export default messageStore;
