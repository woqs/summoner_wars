import React, { useContext, useEffect, useState } from "react"
import GameContext from "../Infrastructure/game-context";
import "./TurnStateDisplay.css"
import { TURN_STATE_ATTACK, TURN_STATE_CONSTRUCT, TURN_STATE_END_STEP, TURN_STATE_INVOKE, TURN_STATE_MAGIC, TURN_STATE_MOVE, TURN_STATE_START_STEP, TurnState } from "../Domain/TurnState";

const TurnStateDisplay: React.FC = () => {
  const { turnState: turnStateTracker, setTurnState: setTurnStateTracker, playerOne, playerTwo } = useContext(GameContext);
  const [turnState, setTurnState] = useState<TurnState>();
  useEffect(() => {
    playerOne && playerTwo && setTurnState(new TurnState([playerOne.name, playerTwo.name], playerOne.name));
  }, [playerOne, playerTwo]);

  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      border: "solid black 1px",
      padding: "20px",
      gap: "20px",
      borderRadius: "15px"
    }}>
    {turnState && (
      <>
        <div style={{width: "100%", display: "flex", justifyContent: "space-around"}}>
          <div>
            Turn of {turnStateTracker.currentPlayerName}
          </div>
          <div>
            <button onClick={() => {
              const newState = turnState.next();
              setTurnStateTracker({currentPlayerName: newState.getCurrentPlayerName(), currentTurnState: newState.getCurrentState()});
            }}>
              Next
            </button>
          </div>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
          <div className="turnStep" style={{backgroundColor: turnState.getCurrentState() === TURN_STATE_START_STEP ? "red" : ""}}>
            0<br/>resolve events
          </div>
          <div className="turnStep" style={{backgroundColor: turnState.getCurrentState() === TURN_STATE_INVOKE ? "red" : "" }}>
            1<br/>invoke
          </div>
          <div className="turnStep" style={{backgroundColor: turnState.getCurrentState() === TURN_STATE_MOVE ? "red" : "" }}>
            2<br/>move
          </div>
          <div className="turnStep" style={{backgroundColor: turnState.getCurrentState() === TURN_STATE_CONSTRUCT ? "red" : "" }}>
            3<br/>construct
          </div>
          <div className="turnStep" style={{backgroundColor: turnState.getCurrentState() === TURN_STATE_ATTACK ? "red" : "" }}>
            4<br/>attack
          </div>
          <div className="turnStep" style={{backgroundColor: turnState.getCurrentState() === TURN_STATE_MAGIC ? "red" : "" }}>
            5<br/>magic
          </div>
          <div className="turnStep" style={{backgroundColor: turnState.getCurrentState() === TURN_STATE_END_STEP ? "red" : "" }}>
            6<br/>draw
          </div>
        </div>
      </>
    )}
    </div>
  );
}

export default TurnStateDisplay;
