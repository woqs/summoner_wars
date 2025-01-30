import React from 'react';
import Game from './SummonerWars/Game';
import GameContextProvider from './SummonerWars/Infrastructure/GameContextProvider';

import './App.css';

function App() {
  return (
    <div>
      <GameContextProvider>
        <Game fieldHeight={8} fieldWidth={6}/>
      </GameContextProvider>
    </div>
  );
}

export default App;
