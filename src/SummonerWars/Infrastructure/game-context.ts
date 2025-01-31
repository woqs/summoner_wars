import { createContext } from "react";
import { State } from "../Domain/FieldState";
import { Player } from "../Domain/Player";
import { Deck } from "../Domain/Deck";

type Props = {
  setSelectedState: (unit?: State) => void;
  selectedState?: State | null;
  setPlayerOne: (player: Player) => void;
  playerOne?: Player;
  setPlayerTwo: (player: Player) => void;
  playerTwo?: Player;
};

const GameContext = createContext<Props>({
  setSelectedState: () => undefined,
  selectedState: null,
  setPlayerOne: () => undefined,
  playerOne: {name: "One", mana: 2, deck: new Deck([]), graveyard: [], unitsState: []},
  setPlayerTwo: () => undefined,
  playerTwo: {name: "Two", mana: 3, deck: new Deck([]), graveyard: [], unitsState: []},
});

export default GameContext;
