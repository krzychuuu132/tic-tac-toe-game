import { AutoOptionsContextUI } from "./src/AutoOptionsContextUI";
import { GameAreaUi } from "./src/GameAreaUI";
import { OptionsContextUI } from "./src/OptionsContextUI";
import { OptionFactory } from "./src/OptionsFactory";
import { OptionsUI } from "./src/OptionsUI";

export const AUTO_CHOICE_TIME = 3000;

const factory = new OptionFactory();
const optionsUI = new OptionsUI(".option-area");
const optionsContextUI = new OptionsContextUI(".context");
const gameAreaUI = new GameAreaUi(".game-area");
const autoOptionsContextUI = new AutoOptionsContextUI(".auto-choice-context");

optionsUI.subscribe((selectedOption) => {
  optionsContextUI.updateContext(selectedOption);
  gameAreaUI.changeOption(selectedOption);
  gameAreaUI.activeArea();
});

gameAreaUI.subscribe((clickedBtn: HTMLButtonElement) => {
  // GET CHOOSED OPTION
  const option = factory.getOption(optionsContextUI.choosedOption);
  // MARK FIELD BY USER - CROSS/CIRCLE
  gameAreaUI.markField(option, clickedBtn);
  // SET AUTO CHOICE CONTEXT
  autoOptionsContextUI.setContext();
  // AUTO CHOICE BY COMPUTER
  gameAreaUI.autoChoice(option, clickedBtn);
  // CLEAR AUTO CHOICE CONTEXT
  autoOptionsContextUI.clearContext();
  // CHECK WINNER
  gameAreaUI.checkScore();
});
