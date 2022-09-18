import { Options } from "./OptionsFactory";

export class OptionsContextUI {
  context: HTMLDivElement;
  container: string;
  currentOption: string;
  constructor(container) {
    this.container = container;
    this.context = document.createElement("div");
    this.context.textContent = "Select an option first";
    this.currentOption = "";
    this.attachToContainer();
  }

  attachToContainer() {
    document.querySelector(this.container).appendChild(this.context);
  }

  updateContext(option) {
    this.context.textContent = this.formatText(option);
    this.setChoosedOption = option;
  }

  get choosedOption() {
    return this.currentOption;
  }

  set setChoosedOption(option) {
    this.currentOption = option;
  }

  formatText(option) {
    switch (option) {
      case Options.circle:
        return `Selected option - circle`;
      case Options.cross:
        return `Selected option - cross`;
    }
  }
}
