import React from 'react';
import { gotoMenu } from '../../actions';
import { useDispatch } from "react-redux";
import { Text1, Text2, MenuButton } from './styled';

function GameOver() {
    const dispatch = useDispatch();

    function openMenu() {
        dispatch(gotoMenu());
    }

    return(
        <>
            <Text2> GAME OVER </Text2>
            <Text1> :( </Text1>
            <MenuButton onClick={openMenu}> menu </MenuButton>
        </>
    );
}

export default GameOver;