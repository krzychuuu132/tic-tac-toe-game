import { Options } from "./OptionsFactory";

export class OptionsUI {
  subscribers: Array<Function>;
  container: string;
  constructor(container: string) {
    const root: HTMLDivElement = this.createRoot();
    this.createButtons(root);
    this.attachToContainer(container, root);
    this.subscribers = [];
  }

  createRoot() {
    const root = document.createElement("div");
    return root;
  }

  createButtons(root) {
    root.appendChild(this.createButton("Circle", Options.circle));
    root.appendChild(this.createButton("Cross", Options.cross));
  }

  attachToContainer(container: string, root: HTMLDivElement) {
    document.querySelector(container).appendChild(root);
  }

  createButton(name: string, selector: string) {
    const btn: HTMLButtonElement = document.createElement("button");
    btn.setAttribute("data-option", selector);
    btn.textContent = name;
    btn.addEventListener("click", () => {
      this.subscribers.forEach((s) => s(selector));
    });
    return btn;
  }

  subscribe(subscriber: Function) {
    this.subscribers.push(subscriber);
  }
}
