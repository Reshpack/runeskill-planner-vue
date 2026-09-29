import { defineStore } from "pinia";

export const useSavedMethodsStore = defineStore("savedMethods", {
  state: () => ({
    savedMethods: [],
  }),

  getters: {
    totalCount: (state) => state.savedMethods.length,

    formattedSummary: (state) => {
      if (state.savedMethods.length === 0) {
        return "No training methods saved.";
      }

      return `${state.savedMethods.length} training method(s) saved.`;
    },
  },

  actions: {
    addItem(method) {
      const alreadySaved = this.savedMethods.some(
        (item) => item.id === method.id
      );

      if (!alreadySaved) {
        this.savedMethods.push(method);
      }
    },

    removeItem(methodId) {
      this.savedMethods = this.savedMethods.filter(
        (item) => item.id !== methodId
      );
    },

    resetStore() {
      this.savedMethods = [];
    },
  },
});