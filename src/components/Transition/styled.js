import styled from 'styled-components';
import musicNote from '../../assets/music_note.png';

export const TransitionDiv = styled.div`
    display: flex;
    flex-direction: row;
`

export const TransitionTitle = styled.h2`
    margin-right: 20px;
`

export const TransitionImage = styled.div`
    background-image: url(${musicNote});
    background-size: 100%;
    width: 30px;
    height: 42.86px;
    margin-right: 4px;
`
