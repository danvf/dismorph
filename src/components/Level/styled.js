import styled from 'styled-components';
import musicNote from '../../assets/music_note.png';
import Input from '../global/Input';
import { Form } from '@unform/web';

export const LevelLabel = styled.h6 `
    margin: auto 20px;
    text-align: center;
    vertical-align: center;
`

export const LevelNote = styled.div`
    background-image: url(${musicNote});
    background-size: 100%;
    width: 14px;
    height: 20px;
    margin-right: 4px;
`

export const LevelIndicatorDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    margin-top: 10px;
`

export const LevelIndicator = (props) => {
    let lvCount = [];
    const lv = props.lv;
    for (let i = 0; i < lv; i++) {
        lvCount.push(<LevelNote key={i}/>);
    }

    return(
        <LevelIndicatorDiv>
            <LevelLabel> level </LevelLabel>
            {lvCount}
        </LevelIndicatorDiv>
    );
}

export const StatusFrame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    height: 100px;
    width: 100px;
    box-shadow:
    4px 0 #ffffff,
    -4px 0 #ffffff,
    0 -4px #ffffff,
    0 4px #ffffff,
    8px 0 #ffffff,
    -8px 0 #ffffff,
    0 -8px #ffffff,
    0 8px #ffffff, 
    0 0 0 4px #ffffff,
    12px 0 #000000,
    -12px 0 #000000, 
    0 12px #000000,
    0 -12px #000000,
    0 -4px 0 4px #000000,
    0 4px 0 4px #000000,
    4px 0 0 4px #000000,
    -4px 0 0 4px #000000;
`

export const StatusText = styled.h1`
    margin: 0px;
    margin-left: 10px;
    font-size: 60px;
    color: ${({ status }) => handleColorStatus(status)};
`
export const StatusButton = styled.button`
    width: 60px;
    height: 20px;
    margin: 10px auto;
    background: #FA74F2;
    outline: none;
    border: none;
    color: #ffffff;
    font-family: 'Press Start 2P', cursive;
    padding-left: 12px;
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

const handleTextStatus = status => {
  switch (status) {
    case "ok":
      return "OK";
    case "?":
      return "?";
    default:
      return "X";
  }
};

const handleColorStatus = status => {
  switch (status) {
    case "ok":
      return "#05ff00";
    case "?":
      return "#faff00";
    default:
      return "#ff0000";
  }
};

export const Status = (props) => {
    return(
      <StatusFrame>
          <StatusText status={props.status}>
              {handleTextStatus(props.status)}
          </StatusText>
      </StatusFrame>  
    );
}

export const ChancesText = styled.h6`
    display: inline;
    font-size: 10px;
    margin: 10px 0px;
`

export const ChancesLeft = styled.h4`
    display: inline;
    color: #FA74F2;
`

export const Chances = (props) => {
    return(
        <ChancesText> YOU HAVE <ChancesLeft>{props.lives}</ChancesLeft> CHANCES!!! </ChancesText>
    );
}

export const SelectorDiv = styled.div`
    width: 240px;
    padding: 2px 16px 16px 12px;
    margin: 20px;
    box-shadow:
    2px 0 #ffffff,
    -2px 0 #ffffff,
    0 -2px #ffffff,
    0 2px #ffffff,
    4px 0 #ffffff,
    -4px 0 #ffffff,
    0 -4px #ffffff,
    0 4px #ffffff, 
    0 0 0 2px #ffffff,
    6px 0 #000000,
    -6px 0 #000000, 
    0 6px #000000,
    0 -6px #000000,
    0 -2px 0 2px #000000,
    0 2px 0 2px #000000,
    2px 0 0 2px #000000,
    -2px 0 0 2px #000000;
`

export const SelectorDiv2 = styled.div`
    width: 240px;
    padding: 2px 16px 16px 12px;
    margin: 20px;
`

export const SelectorLabel = styled.h6`
    align-self: flex-start;
    margin: 6px 2px 12px 0px;
`

export const SubmitDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
` 

export const SubmitButton = styled.button`
    margin-bottom: 20px;
    width: 120px;
    height: 30px;
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

export const Selectors = (props) => {
    return(
        <Form onSubmit={props.onSubmit}>
            <SelectorDiv>
                <SelectorLabel> speed: </SelectorLabel>
                <Input name="speed" type="range" min="0" max="6" step="1"/>
            </SelectorDiv>
            <SelectorDiv>
                <SelectorLabel> pitch: </SelectorLabel>
                <Input name="pitch" type="range" min="0" max="6" step="1"/>
            </SelectorDiv>
            <SelectorDiv>
                <SelectorLabel> tone: </SelectorLabel>
                <Input name="tone" type="range" min="0" max="4" step="1"/>
            </SelectorDiv>
            <SubmitDiv>    
                <SubmitButton type="submit">submit!</SubmitButton>
            </SubmitDiv>
        </Form>
    );
}

