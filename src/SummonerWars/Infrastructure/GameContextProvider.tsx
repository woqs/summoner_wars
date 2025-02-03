import React, { useState } from "react";
import GameContext from "./game-context";
import { State } from "../Domain/FieldState";
import { Player } from "../Domain/Player";
import { TURN_STATE_START_STEP, TurnStateTracker } from "../Domain/TurnState";

const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<State|null>();
  const [playerOne, setPlayerOne] = useState<Player | undefined>();
  const [playerTwo, setPlayerTwo] = useState<Player | undefined>();
  const [turnState, setTurnState] = useState<TurnStateTracker>({currentPlayerName: "", currentTurnState: TURN_STATE_START_STEP});

  const TokenValue = {
    setSelectedState: (state?: State | null) => setState(state),
    selectedState: state,
    setPlayerOne: (player: Player) => setPlayerOne(player),
    playerOne,
    setPlayerTwo: (player: Player) => setPlayerTwo(player),
    playerTwo,
    setTurnState: (turnState: TurnStateTracker) => setTurnState(turnState),
    turnState,
  };

  return (
    <GameContext.Provider value={TokenValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
