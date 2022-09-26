import { AUTO_CHOICE_TIME } from "../script";
import { Circle } from "./Circle";
import { Cross } from "./Cross";
import { Options } from "./OptionsFactory";

const GAME_AREA_ROWS = 3;

export class GameAreaUi {
  container: string;
  subscribers: Array<Function>;
  currentOption: Options;
  root: HTMLDivElement;
  constructor(container) {
    this.root = this.createRoot();
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

  activeArea() {
    this.root.parentElement.classList.remove("game-area--disabled");
  }

  disableArea() {
    this.root.parentElement.classList.add("game-area--disabled");
  }

  autoChoice(option: Circle | Cross, clickedbtn: HTMLButtonElement) {
    this.disableArea();

    setTimeout(() => {
      const getRandomChoice = (): HTMLButtonElement => {
        const btns = [...this.root.children].filter((btn: HTMLButtonElement) => btn.children.length === 0) as Array<HTMLButtonElement>;
        const getRandomValue: number = Math.floor(Math.random() * btns.length);
        const getRandomButton: HTMLButtonElement = btns[getRandomValue];
        return getRandomButton;
      };

      if (this.currentOption === Options.circle) {
        const newCircle = new Circle(Options.circle);
        this.markField(newCircle, getRandomChoice());
      } else {
        const newCross = new Cross(Options.cross);
        this.markField(newCross, getRandomChoice());
      }
      this.activeArea();
    }, AUTO_CHOICE_TIME);
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

  checkScore() {
    const btns = [...this.root.children] as Array<HTMLButtonElement>;

    const getClickedBtns = [...this.root.children].filter((btn: HTMLButtonElement, index) => {
      if (btn.className === "disabled") {
      }
    }) as Array<HTMLButtonElement>;
  }

  changeOption(option) {
    this.currentOption = option;
  }

  markField(option: Circle | Cross, clickedbtn: HTMLButtonElement) {
    const svgElement = option.getIcon();
    clickedbtn.innerHTML = svgElement;
    clickedbtn.classList.add("disabled");
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
