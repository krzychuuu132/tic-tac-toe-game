const GAME_AREA_ROWS = 3;

export class GameAreaUi {
  container: string;
  subscribers: Array<Function>;
  constructor(container) {
    const root = this.createRoot();
    this.attachToContainer(container, root);
    const btns = this.createButtons(root);
    this.subscribers = [];
  }

  attachToContainer(container, root) {
    document.querySelector(container).appendChild(root);
  }

  createRoot() {
    const root = document.createElement("div");
    return root;
  }

  createButton(id: number) {
    const btn: HTMLButtonElement = document.createElement("button");
    btn.setAttribute("data-id", String(id));
    btn.addEventListener("click", () => {
      this.subscribers.forEach((s) => s());
    });
    return btn;
  }

  markArea(option) {}

  createButtons(root: HTMLDivElement) {
    for (let i = 1; i < GAME_AREA_ROWS * GAME_AREA_ROWS; i++) {
      root.appendChild(this.createButton(i));
    }
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
