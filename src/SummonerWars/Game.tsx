import React, { useContext } from "react"
import Field from "./Field";
import Modal from "./Infrastructure/Modal";
import GameContext from "./Infrastructure/game-context";
import UnitDisplay from "./Application/UnitDisplay";
import PlayerDisplay from "./Application/PlayerDisplay";
import { Deck } from "./Domain/Deck";
import { Faction_CaveGobelins } from "./Domain/Faction";

const Game: React.FC<{ fieldHeight: number, fieldWidth: number }> =
  ({ fieldHeight, fieldWidth }) =>
{
  const {playerOne, playerTwo, setPlayerOne, setPlayerTwo, selectedState} = useContext(GameContext);

  return (
    <>
      {!playerOne && 
        <Modal>
          <div>Player 1 : Choose your deck</div>
          <button onClick={() => setPlayerOne({name: "One", mana: 2, deck: Faction_CaveGobelins.deck, graveyard: [], unitsState: Faction_CaveGobelins.startingPosition})}>
            SetPlayer 1
          </button>
        </Modal>
      }
      {playerOne && !playerTwo && 
        <Modal>
          <div>Player 2 : Choose your deck</div>
          <button onClick={() => setPlayerTwo({name: "Two", mana: 3, deck: new Deck([]), graveyard: [], unitsState: []})}>
            SetPlayer 2
          </button>
        </Modal>
      }

      <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
        <div style={{width: "100%", display:"flex", justifyContent: "space-around"}}>
          <div style={{width: "50%", display: "flex", justifyContent: "space-around"}}>
            {playerTwo && <PlayerDisplay player={playerTwo} />}
          </div>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "space-around"}}>
          <div style={{width: "25%"}}>
            <UnitDisplay unit={selectedState?.unit} />
          </div>
          <div style={{width: "50%", display: "flex", justifyContent: "space-around"}}>
            <Field fieldHeight={fieldHeight} fieldWidth={fieldWidth} />
          </div>
          <div style={{width: "25%"}}>
            <div style={{border:"1px solid black", height: "100%"}}>
              Chat?
            </div>
          </div>
        </div>
        <div style={{width: "100%", display:"flex", justifyContent: "space-around"}}>
          <div style={{width: "50%", display: "flex", justifyContent: "space-around"}}>
            {playerOne && <PlayerDisplay player={playerOne} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
