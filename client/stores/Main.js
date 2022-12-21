export const useAppStore = defineStore('Main', {
  state: () => {
    return {
      name: '',
    };
  },

  getters: {
    getName: (state) => state.name,
  },

  actions: {
    setName(name) {
      this.name = name
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
