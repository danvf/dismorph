import React from 'react';

import { useEffect } from 'react';

import Main from './components/global/Main';

// import Menu from './components/Menu/';
// import Transition from './components/Transition';
// import Level from './components/Level';
// import LevelWin from './components/LevelWin';
// import GameWin from './components/GameWin';
import GameOver from './components/GameOver';

function App() {
  useEffect(() => {
    const handleEnter = (event) => {
       if (event.keyCode === 13) {
        // handle enter press on main menu
      }
    };
    window.addEventListener('keydown', handleEnter);
    return () => {
      window.removeEventListener('keydown', handleEnter);
    };
  }, []);

  return (
    <Main>    
      <GameOver/>  
    </Main>
  );
}

export default App;