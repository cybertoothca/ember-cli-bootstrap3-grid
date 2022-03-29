import Component from "@ember/component";
import { computed } from "@ember/object";

import layout from "../templates/components/random-height-block";

export default Component.extend({
  classNameBindings: ["heightClass"],

  classNames: ["bg-info"],

  layout,

  heightClass: computed(function () {
    return [
      "height-50",
      "height-75",
      "height-100",
    ][Math.round(Math.random() * 10) % 3];
  }),
});
