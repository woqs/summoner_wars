import React, { useContext } from "react"
import { State } from "../Domain/FieldState";
import GameContext from "../Infrastructure/game-context";

const FieldBox: React.FC<
  {state: State}
> = ({state}) => {
  const {selectedState, setSelectedState} = useContext(GameContext);

  return (
    <div
      style={{width: "100px", height: "75px", backgroundColor: state === selectedState ? "red" : "beige", border: "1px solid black"}}
      onClick={() => {
        setSelectedState(state);
      }}
    >
      {state.unit?.name}
    </div>
  );
}

export default FieldBox;
