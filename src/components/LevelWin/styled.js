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

export const NextButton = styled.button`
    margin-top: 40px;
    width: 80px;
    height: 20px;
    background: #FA74F2;
    outline: none;
    border: none;
    color: #ffffff;
    font-family: 'Press Start 2P', cursive;
    box-shadow:
    4px 0 #FA74F2,
    -4px 0 #FA74F2,
    0 -4px #FA74F2,
    0 4px #FA74F2,
    8px 0 #000000,
    -8px 0 #000000,
    0 -8px #000000,
    0 8px #000000, 
    0 0 0 4px #000000;

    &:hover {
        cursor: pointer;
        transform: translateY(-1.4px);
        background: #d963e1;
        box-shadow:
    4px 0 #d963e1,
    -4px 0 #d963e1,
    0 -4px #d963e1,
    0 4px #d963e1,
    8px 0 #000000,
    -8px 0 #000000,
    0 -8px #000000,
    0 8px #000000, 
    0 0 0 4px #000000;
    }

    &:active {
        cursor: pointer;
        transform: translateY(-0.4px);
    }
`

