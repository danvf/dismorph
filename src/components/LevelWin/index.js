import React from 'react';

import { SongTitle, SongArtist, Text3, Text4 } from './styled';


function LevelWin(props) {

    return(
        <>
            <Text3> great!!! </Text3>
            <Text4> you dismorphed: </Text4>
            <SongTitle song={props.song} />
            <SongArtist artist={props.artist} />
        </>
    );
}

export default LevelWin;