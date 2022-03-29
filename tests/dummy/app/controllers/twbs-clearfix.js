import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    toggleClearFix() {
      this.set("isClearFixEnabled", !this.isClearFixEnabled);
    },
  },

  isClearFixEnabled: true,
});
