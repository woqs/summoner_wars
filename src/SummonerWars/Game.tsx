import React, { useContext, useState } from "react"
import Field from "./Field";
import { FieldState, State } from "./Domain/FieldState";
import Modal from "./Infrastructure/Modal";
import GameContext from "./Infrastructure/game-context";
import UnitDisplay from "./Application/UnitDisplay";
import PlayerDisplay from "./Application/PlayerDisplay";
import { Deck, Deck_CaveGoblins } from "./Domain/Deck";

const Game: React.FC<{ fieldHeight: number, fieldWidth: number }> =
  ({ fieldHeight, fieldWidth }) =>
{
  const [fieldState, setFieldState] = useState<FieldState>(initiateFieldState(fieldHeight, fieldWidth));
  const {playerOne, playerTwo, setPlayerOne, setPlayerTwo, selectedState} = useContext(GameContext);

  return (
    <>
      {!playerOne && 
        <Modal>
          <div>Player 1 : Choose your deck</div>
          <button onClick={() => setPlayerOne({name: "One", mana: 2, deck: Deck_CaveGoblins, graveyard: 0})}>
            SetPlayer 1
          </button>
        </Modal>
      }
      {playerOne && !playerTwo && 
        <Modal>
          <div>Player 2 : Choose your deck</div>
          <button onClick={() => setPlayerTwo({name: "Two", mana: 3, deck: new Deck([]), graveyard: 0})}>
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
            <Field fieldState={fieldState} updateFieldstate={(fieldState: FieldState) => {setFieldState(fieldState)}} />
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

function initiateFieldState(fieldHeight: number, fieldWidth: number): FieldState {
  let field: Array<Array<State>> = [];
  for(let i=0; i<fieldHeight; i++) {
    field[i] = [];
    for(let j=0; j<fieldWidth; j++) {
      field[i][j] = {y: i, x: j};
    }
  }

  return {
    field: field
  };
}

export default Game;
