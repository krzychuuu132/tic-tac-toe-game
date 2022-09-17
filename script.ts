import { GameAreaUi } from "./src/GameAreaUI";
import { OptionsContextUI } from "./src/OptionsContextUI";
import { OptionFactory } from "./src/OptionsFactory";
import { OptionsUI } from "./src/OptionsUI";

const factory = new OptionFactory();
const optionsUI = new OptionsUI(".option-area");
const optionsContextUI = new OptionsContextUI(".context");
const gameAreaUI = new GameAreaUi(".game-area");

optionsUI.subscribe((selectedOption) => {
  optionsContextUI.updateContext(selectedOption);
});

gameAreaUI.subscribe(() => {
  const option = optionsContextUI.choosedOption;
  gameAreaUI.markArea(option);
});
