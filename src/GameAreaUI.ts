import { Circle } from "./Circle";
import { Cross } from "./Cross";

const GAME_AREA_ROWS = 3;

export class GameAreaUi {
  container: string;
  subscribers: Array<Function>;
  currentOption: Circle | Cross;
  root:  HTMLDivElement
  constructor(container) {
    this.root =  this.createRoot();
    this.attachToContainer(container, this.root);
    this.createButtons(this.root);
    this.currentOption;
    this.subscribers = [];
  }

  attachToContainer(container, root) {
    document.querySelector(container).appendChild(root);
  }

  createRoot() {
    const root = document.createElement("div");
    root.className = "buttons";
    return root;
  }

  activeArea()  {
    this.root.parentElement.classList.remove('game-area--disabled')
  }

  createButton(id: number) {
    const btn: HTMLButtonElement = document.createElement("button");
    btn.setAttribute("data-id", String(id));
    btn.addEventListener("click", (e) => {
      this.subscribers.forEach((s) => s(e.target));
    });
    return btn;
  }

  createButtons(root: HTMLDivElement) {
    for (let i = 1; i <= GAME_AREA_ROWS * GAME_AREA_ROWS; i++) {
      root.appendChild(this.createButton(i));
    }
  }

  changeOption(option) {
    this.currentOption = option;
  }

  markField(option: Circle | Cross, clickedbtn: HTMLButtonElement) {
    const svgElement = option.getIcon();
    clickedbtn.innerHTML = svgElement;
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
