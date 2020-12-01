import React, { useState } from 'react';
import { gotoLevelWin, gotoGameOver } from '../../actions/';
import { useDispatch } from "react-redux";
import { Chances, LevelIndicator, Selectors, Status, StatusButton } from './styled';

import playSong from '../../assets/play.png';


function Level(props) {
    const dispatch = useDispatch();
    const [chances, setChances] = useState(3);
    const [status, setStatus] = useState("?");

    function onFail() {
        setChances(chances - 1);
        setStatus("x");
        setTimeout(function() {
            setStatus("?");
        }.bind(this), 1500)
        if (chances === 0) {
            dispatch(gotoGameOver());
        }
    } 

    function onSuccess() {
        // PASS (SONG, ARTIST) AS ARGUMENTS TO GOTOLEVELWIN
        dispatch(gotoLevelWin("Song", "Artist"));
    }
    
    function handleSubmit(data) {
        // check if user got the parameters right
     }

    return(
        <>
            <LevelIndicator lv={props.lv}/>
            <Status status={status}/>
            <StatusButton onClick={onFail}> <img src={playSong}/> </StatusButton>
            <Chances lives={3}/>
            <Selectors onSubmit={handleSubmit}/>
        </>
    )
}

export default Level;