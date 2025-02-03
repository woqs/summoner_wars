import React, { useContext } from "react"
import { State } from "../Domain/FieldState";
import GameContext from "../Infrastructure/game-context";
import { TURN_STATE_ATTACK, TURN_STATE_MOVE } from "../Domain/TurnState";

const FieldBox: React.FC<
  {state: State}
> = ({state}) => {
  const { selectedState, setSelectedState, turnState } = useContext(GameContext);
  const bgColor: string =
    state === selectedState ? "red" :
    turnState?.currentTurnState === TURN_STATE_MOVE && canSelectBoxNearby(state, false, selectedState) ? "green" :
    turnState?.currentTurnState === TURN_STATE_ATTACK && canSelectBoxNearby(state, true, selectedState) ? "orange" :
    "beige"
  ;

  return (
    <div
      style={{width: "100px", height: "75px", backgroundColor: bgColor, border: "1px solid black"}}
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
        {turnState?.currentTurnState === TURN_STATE_ATTACK && state.unit && state === selectedState && (
          <div style={{display: "flex", justifyContent: "space-around"}}>
            <button>Attack</button>
          </div>
        )}
      </div>
    </div>
  );
}

function canSelectBoxNearby(state: State, hasUnit: boolean, selected?: State | null): boolean {
  if (!selected) {
    return false;
  }

  if(!(
    (selected.x === state.x && (selected.y === state.y-1 || selected.y === state.y+1)) ||
    (selected.y === state.y && (selected.x === state.x-1 || selected.x === state.x+1))
  )) {
    return false;
  }

  if(!!state.unit) {
    return hasUnit;
  }
  return !hasUnit;
}

export default FieldBox;
