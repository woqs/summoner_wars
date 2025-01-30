import { createContext } from "react";
import { State } from "../Domain/FieldState";
import { Player } from "../Domain/Player";
import { Deck } from "../Domain/Deck";

type Props = {
  setSelectedState: (unit?: State) => void;
  selectedState?: State | null;
  playerOne?: Player;
  playerTwo?: Player;
  setPlayerOne: (player: Player) => void;
  setPlayerTwo: (player: Player) => void;
};

const GameContext = createContext<Props>({
  setSelectedState: () => undefined,
  selectedState: null,
  playerOne: {name: "One", mana: 2, deck: new Deck([]), graveyard: 0},
  playerTwo: {name: "Two", mana: 3, deck: new Deck([]), graveyard: 0},
  setPlayerOne: () => undefined,
  setPlayerTwo: () => undefined,
});

export default GameContext;
