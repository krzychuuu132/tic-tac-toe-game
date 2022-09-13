import { Circle } from "./Circle";
import { Cross } from "./Cross";

export enum Options {
  circle = "cricle",
  cross = "cross",
}

export class OptionFactory {
  circle: Circle;
  cross: Cross;
  constructor() {
    this.circle = new Cross(Options.circle);
    this.cross = new Circle(Options.cross);
  }

  getOption(option) {
    switch (option) {
      case Options.circle:
        return this.circle;
      case Options.cross:
        return this.cross;
    }
  }
}
