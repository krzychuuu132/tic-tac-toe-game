import { Options } from "./OptionsFactory";

export class OptionsContextUI {
  context: HTMLDivElement;
  container: string;
  option: string;
  constructor(container) {
    this.container = container;
    this.context = document.createElement("div");
    this.context.textContent = "Select an option first";
    this.option = "";
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
    return this.option;
  }

  set setChoosedOption(option) {
    this.option = option;
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
