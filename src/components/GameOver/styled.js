import styled from 'styled-components';

export const Text2 = styled.h2`
`
export const Text1 = styled.h1`
    color: #FA74F2;
`


export const MenuButton = styled.button`
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

