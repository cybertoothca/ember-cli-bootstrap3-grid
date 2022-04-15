import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class TwbsClearfixController extends Controller {
  isClearFixEnabled = true;

  @action toggleClearFix() {
    this.set("isClearFixEnabled", !this.isClearFixEnabled);
  }
}
