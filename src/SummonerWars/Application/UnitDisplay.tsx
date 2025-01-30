import React from "react"
import { Unit } from "../Domain/Card";

const UnitDisplay: React.FC<
  {unit?: Unit}
> = ({unit}) => {
  return (
    <div>
      {unit?.name}
    </div>
  );
}

export default UnitDisplay;
