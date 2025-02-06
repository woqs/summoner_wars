import { createContext } from "react";
import { State } from "../Domain/FieldState";
import { Player } from "../Domain/Player";
import { Deck } from "../Domain/Deck";
import { TurnStateTracker } from "../Domain/TurnState";

type Props = {
  setSelectedState: (unit?: State) => void;
  selectedState?: State | null;
  setPlayerOne: (player: Player) => void;
  playerOne?: Player;
  setPlayerTwo: (player: Player) => void;
  playerTwo?: Player;
  setTurnState: (turnState: TurnStateTracker) => void;
  turnState: TurnStateTracker;
};

const GameContext = createContext<Props>({
  setSelectedState: () => undefined,
  selectedState: null,
  setPlayerOne: () => undefined,
  playerOne: {name: "One", mana: 2, deck: new Deck([]), graveyard: [], unitsState: [], isItMe: true},
  setPlayerTwo: () => undefined,
  playerTwo: {name: "Two", mana: 3, deck: new Deck([]), graveyard: [], unitsState: [], isItMe: false},
  setTurnState: () => undefined,
  turnState: {currentPlayerName: "", currentTurnState: "Start"},
});

export default GameContext;
