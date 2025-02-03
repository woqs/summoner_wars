import React, { useContext } from "react"
import { State } from "../Domain/FieldState";
import GameContext from "../Infrastructure/game-context";
import { TURN_STATE_MOVE } from "../Domain/TurnState";

const FieldBox: React.FC<
  {state: State}
> = ({state}) => {
  const {selectedState, setSelectedState, turnState} = useContext(GameContext);

  return (
    <div
      style={{width: "100px", height: "75px", backgroundColor: state === selectedState ? "red" : "beige", border: "1px solid black"}}
      onClick={() => {
        setSelectedState(state);
      }}
    >
      {state.unit?.name}
      <div>
        {turnState?.currentTurnState === TURN_STATE_MOVE && state.unit && state === selectedState && (
          <div style={{display: "flex", justifyContent: "space-around"}}>
            <button>Move</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FieldBox;
