import React from 'react';

import { TransitionDiv, TransitionTitle, TransitionImage } from './styled';

export default function Transition(props) {
    let lvCount = [];
    const lv = props.lv;
    for (let i = 0; i < lv; i++) {
        lvCount.push(<TransitionImage/>);
    }

    return (
        <TransitionDiv>
            <TransitionTitle> level </TransitionTitle>
            {lvCount}
        </TransitionDiv>
    );
}