import React, { useState } from 'react';

import { Chances, LevelIndicator, Selectors, Status, StatusButton } from './styled';

import playSong from '../../assets/play.png';


function Level(props) {
    const [chances, setChances] = useState(3);
    const [status, setStatus] = useState("?");

    function onFail() {
        
        setChances(chances - 1);
        if (chances === 0) {
            // go to game over
        }
    } 

    function onSuccess() {
        // go to next level
    }
    
    function handleSubmit(data) {
        // check if user got the parameters right
     }

    return(
        <>
            <LevelIndicator lv={props.lv}/>
            <Status status={"?"}/>
            <StatusButton> <img src={playSong}/> </StatusButton>
            <Chances lives={3}/>
            <Selectors onSubmit={handleSubmit}/>
        </>
    )
}

export default Level;