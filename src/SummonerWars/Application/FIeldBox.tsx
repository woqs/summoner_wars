import React, { useContext } from "react"
import { State } from "../Domain/FieldState";
import GameContext from "../Infrastructure/game-context";
import { TURN_STATE_ATTACK, TURN_STATE_INVOKE, TURN_STATE_MOVE } from "../Domain/TurnState";
import "./FieldBox.css"
import { CAPACITY_PORTAL, Capacity } from "../Domain/Card";

const SELECTED = "red";
const NEARBY_MOVE = "green";
const NEARBY_ATTACK = "orange";
const NEARBY_PORTAL = "aqua";
const DEFAULT = "beige";

const FieldBox: React.FC<
  {state: State}
> = ({state}) => {
  const { selectedState, setSelectedState, turnState, playerOne, playerTwo } = useContext(GameContext);
  const isMyTurn =
    turnState.currentPlayerName === playerOne?.name && playerOne.isItMe ? true :
    playerTwo?.isItMe ?? false
  ;
  // const currentPlayer = (turnState.currentPlayerName === playerOne?.name && playerOne.isItMe) ? playerOne : playerTwo;

  const CAN_INVOKE = isMyTurn && turnState?.currentTurnState === TURN_STATE_INVOKE && selectedState?.unit && canSelectBoxNearby(state, false, selectedState, CAPACITY_PORTAL);
  const CAN_MOVE = isMyTurn && turnState?.currentTurnState === TURN_STATE_MOVE && canSelectBoxNearby(state, false, selectedState);
  const CAN_ATTACK = isMyTurn && turnState?.currentTurnState === TURN_STATE_ATTACK && selectedState?.unit && selectedState.unit.strikes > 0 && canSelectBoxNearby(state, true, selectedState);

  const boxState: string =
    state === selectedState ? SELECTED :
    CAN_MOVE ? NEARBY_MOVE :
    CAN_ATTACK ? NEARBY_ATTACK :
    CAN_INVOKE ? NEARBY_PORTAL :
    DEFAULT
  ;

  return (
    <div
      style={{width: "100px", height: "75px", backgroundColor: boxState, border: "1px solid black"}}
      onClick={() => {
        setSelectedState(state);
      }}
    >
      {state.unit?.name}
      <div style={{height: "100%"}}>
        {CAN_MOVE && (
          <>
            &nbsp;
            <div className="action">
              <button className="actionButton">Move</button>
            </div>
          </>
        )}
        {CAN_ATTACK && (
          <div className="action">
            <button className="actionButton">Attack</button>
          </div>
        )}
        {CAN_INVOKE && (
          <>
            &nbsp;
            <div className="action">
              <button className="actionButton">Invoke</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function canSelectBoxNearby(state: State, hasUnit: boolean, selected?: State | null, unitCapacity?: Capacity): boolean {
  if (!selected) {
    return false;
  }

  if(!(
    (selected.x === state.x && (selected.y === state.y-1 || selected.y === state.y+1)) ||
    (selected.y === state.y && (selected.x === state.x-1 || selected.x === state.x+1))
  )) {
    return false;
  }

  if(unitCapacity && selected.unit?.capacity.filter((capacity: Capacity) => capacity === unitCapacity).length === 0) {
    return false;
  }

  if(!!state.unit) {
    return hasUnit;
  }
  return !hasUnit;
}

export default FieldBox;
