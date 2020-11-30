import React from 'react';

import { useEffect } from 'react';

import Main from './components/global/Main';
import Menu from './components/Menu/';
import Transition from './components/Transition';

function App() {
  useEffect(() => {
    const handleEnter = (event) => {
       if (event.keyCode === 13) {
        console.log('Enter')
      }
    };
    window.addEventListener('keydown', handleEnter);
    return () => {
      window.removeEventListener('keydown', handleEnter);
    };
  }, []);

  //<Menu/>
  //<Transition/>
  return (
    <Main>      
      <Transition lv={1} />
    </Main>
  );
}

export default App;