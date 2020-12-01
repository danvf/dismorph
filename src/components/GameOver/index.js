import React from 'react';

import { Text1, Text2, MenuButton } from './styled';

function GameOver() {
    return(
        <>
            <Text2> GAME OVER </Text2>
            <Text1> :( </Text1>
            <MenuButton> menu </MenuButton>
        </>
    );
}

export default GameOver;