import React from "react"
import { FieldState, State } from "./Domain/FieldState";
import FieldBox from "./Application/FIeldBox";

const Field: React.FC<
  {fieldState: FieldState, updateFieldstate: (fieldState: FieldState) => void}
> = ({fieldState, updateFieldstate}) => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      {fieldState.field.map(
        (row) => <div style={{display: "flex"}}>{row.map(
          (state: State) => <FieldBox state={state} />
        )}</div>
      )}
    </div>
  );
}

export default Field;
