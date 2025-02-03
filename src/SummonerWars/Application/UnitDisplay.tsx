import React, { useContext } from "react"
import GameContext from "../Infrastructure/game-context";

const UnitDisplay: React.FC = () => {
  const {selectedState} = useContext(GameContext);
  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>
      {selectedState?.unit && (
        <div style={{display: "flex", flexDirection: "column", gap:"10px"}}>
          <div>
            {selectedState.unit.name} ({selectedState.unit.cost})
          </div>
          <div>
          {selectedState.unit.strikesType}{selectedState.unit.strikes}/{selectedState.unit.currentHealth}({selectedState.unit.maxHealth})
          </div>
        </div>
      )}
    </div>
  );
}

export default UnitDisplay;
