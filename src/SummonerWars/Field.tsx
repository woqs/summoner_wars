import React, { useCallback, useContext, useEffect, useState } from "react"
import { FieldState, State } from "./Domain/FieldState";
import FieldBox from "./Application/FIeldBox";
import GameContext from "./Infrastructure/game-context";
import { Player } from "./Domain/Player";

const Field: React.FC<{fieldHeight: number, fieldWidth: number}> = ({fieldHeight, fieldWidth}) => {
  const [fieldState, setFieldState] = useState<FieldState>();
  const {playerOne, playerTwo} = useContext(GameContext);

  const loadFieldState = useCallback((playerOne?: Player, playerTwo?: Player) => {
    let field: Array<Array<State>> = [];
    for(let y=0; y<fieldHeight; y++) {
      field[y] = [];
      for(let x=0; x<fieldWidth; x++) {
        const stateOne = playerOne?.unitsState.filter((state: State) => state.x === x && state.y === y)[0];
        const stateTwo = playerTwo?.unitsState.filter((state: State) => state.x === x && state.y === y)[0];
        const unit = stateOne?.unit ?? stateTwo?.unit ?? undefined;
        field[y][x] = {y: y, x: x, unit: unit};
      }
    }

    setFieldState({
      field: field
    });
  }, [fieldHeight, fieldWidth, setFieldState])

  useEffect(() => {
    loadFieldState()
  }, [loadFieldState])

  useEffect(() => {
    loadFieldState(playerOne, playerTwo)
  }, [playerOne, playerTwo, loadFieldState])


  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      {fieldState?.field.map(
        (row) => <div style={{display: "flex"}}>{row.map(
          (state: State) => <FieldBox state={state} />
        )}</div>
      )}
    </div>
  );
}

export default Field;
