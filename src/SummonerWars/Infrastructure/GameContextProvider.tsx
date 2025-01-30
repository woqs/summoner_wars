import React, { useState } from "react";
import GameContext from "./game-context";
import { State } from "../Domain/FieldState";
import { Player } from "../Domain/Player";

const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<State|null>();
  const [playerOne, setPlayerOne] = useState<Player | undefined>();
  const [playerTwo, setPlayerTwo] = useState<Player | undefined>();

  const TokenValue = {
    setSelectedState: (state?: State | null) => setState(state),
    selectedState: state,
    playerOne,
    playerTwo,
    setPlayerOne: (player: Player) => setPlayerOne(player),
    setPlayerTwo: (player: Player) => setPlayerTwo(player),
  };

  return (
    <GameContext.Provider value={TokenValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
