export class AutoOptionsContextUI {
  context: string;
  constructor(container) {
    this.context = "Auto choice...";
    const root = this.createRoot();
    this.attachToContainer(container, root);
  }

  attachToContainer(container, root) {
    document.querySelector(container).appendChild(root);
  }

  createRoot() {
    const div: HTMLDivElement = document.createElement("div");
    div.textContent = this.context;
    return div;
  }
}
