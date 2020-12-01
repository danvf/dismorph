import React from 'react';
import { useSelector } from "react-redux";
import { gotoTransition, gotoGameWin } from '../../actions/';
import { useDispatch } from "react-redux";
import { NextButton, SongTitle, SongArtist, Text3, Text4 } from './styled';


function LevelWin(props) {
    const dispatch = useDispatch();
    let game = useSelector((state) => state.game);

    function goNext() {
        if (game.currentLevel ===  3) {
            dispatch(gotoGameWin());
        } else {
            dispatch(gotoTransition());
        }
    }

    return(
        <>
            <Text3> great!!! </Text3>
            <Text4> you dismorphed: </Text4>
            <SongTitle song={props.song} />
            <SongArtist artist={props.artist} />
            <NextButton onClick={goNext}> next </NextButton>
        </>
    );
}

export default LevelWin;