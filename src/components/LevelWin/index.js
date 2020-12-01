import React from 'react';

import { NextButton, SongTitle, SongArtist, Text3, Text4 } from './styled';


function LevelWin(props) {

    function goNext() {
        // go to next screen
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