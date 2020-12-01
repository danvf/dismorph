import React from 'react';
import { useSelector } from "react-redux";

import Main from './components/global/Main';
import Menu from './components/Menu/';
import Transition from './components/Transition';
import Level from './components/Level';
import LevelWin from './components/LevelWin';
import GameWin from './components/GameWin';
import GameOver from './components/GameOver';

function App() {
  let game = useSelector((state) => state.game);

  return (
    <Main>    
      {game.status === "menu" && <Menu/>}
      {game.status === "transition" && <Transition lv={game.currentLevel} />}
      {game.status === "level" && <Level lv={game.currentLevel} />}
      {game.status === "levelwin" && <LevelWin song={game.song} artist={game.artist}/>}
      {game.status === "gamewin" && <GameWin/>}
      {game.status === "gameover" && <GameOver/>}
    </Main>
  );
}

export default App;