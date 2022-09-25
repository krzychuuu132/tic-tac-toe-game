import { AUTO_CHOICE_TIME } from "../script";

export class AutoOptionsContextUI {
  context: string;
  root: HTMLDivElement;
  constructor(container) {
    this.context = "Auto choice...";
    this.root = this.createRoot();
    this.attachToContainer(container, this.root);
  }

  attachToContainer(container, root) {
    document.querySelector(container).appendChild(root);
  }

  setContext() {
    this.root.textContent = this.context;
  }

  clearContext() {
    setTimeout(() => {
      this.root.textContent = "";
    }, AUTO_CHOICE_TIME);
  }

  createRoot() {
    const div: HTMLDivElement = document.createElement("div");
    return div;
  }
}
