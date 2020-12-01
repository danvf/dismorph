import React, { useEffect } from 'react';
import { gotoTransition } from '../../actions/';
import { useDispatch } from "react-redux";
import { MenuImg, MenuText, Title } from './styled';

export default function Menu() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEnter = (event) => {
       if (event.keyCode === 13) {
         dispatch(gotoTransition());
      }
    };
    window.addEventListener('keydown', handleEnter);
    return () => {
      window.removeEventListener('keydown', handleEnter);
    };
  }, [dispatch]);
  return (
    <>
      <Title> dismorph </Title>
      <MenuImg/>
      <MenuText> press enter to start </MenuText>
    </>
  );
}