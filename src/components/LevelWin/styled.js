import styled from 'styled-components';

export const SongTitleDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Quotes = styled.h2`
    color: #FA74F2;
`

export const Text2 = styled.h2`
`

export const Text3 = styled.h3`
    margin: 0px;
`
export const Text4 = styled.h4``

export const Artist= styled.h4`
    color: #fa74f2;
    margin: 0px;
`

export const SongTitle = (props) => {
    return(
        <SongTitleDiv>
            <Quotes>"</Quotes>
            <Text2>{props.song}</Text2>
            <Quotes>"</Quotes>
        </SongTitleDiv>
    );
}

export const SongArtist = (props) => {
    return(
        <Artist> {props.artist} </Artist>
    );
}

