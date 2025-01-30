import React from "react"
import { Player } from "../Domain/Player";

const PlayerDisplay: React.FC<
  {player: Player}
> = ({player}) => {
  return (
    <div style={{width: "600px"}}>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        {player.name}
      </div>
      <div style={{display: "flex", flexDirection: "row", gap: "10px", justifyContent: "space-around"}}>
        <div>
          Deck : {player.deck.cards.length}
        </div>
        <div>
          Mana : {player.mana}
        </div>
      </div>
    </div>
  );
}

export default PlayerDisplay;
