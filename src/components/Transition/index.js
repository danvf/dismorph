import React, { useEffect } from 'react';
import { gotoLevel } from '../../actions/';
import { useDispatch } from "react-redux";
import { TransitionDiv, TransitionTitle, TransitionImage } from './styled';

export default function Transition(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(function() {
            dispatch(gotoLevel());
        }, 2000)
    }, [dispatch]);

    let lvCount = [];
    const lv = props.lv;
    for (let i = 0; i < lv; i++) {
        lvCount.push(<TransitionImage key={i}/>);
    }

    return (
        <TransitionDiv>
            <TransitionTitle> level </TransitionTitle>
            {lvCount}
        </TransitionDiv>
    );
}