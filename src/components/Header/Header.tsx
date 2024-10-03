import React from 'react';

import Background from '@/components/Background';

import Logo from '../Logo';
import * as SC from './styles';

export const Header = (): JSX.Element => {
  return (
    <SC.Container>
      <Background />
      <Logo />
      <SC.Description>
        Uma solução prática e eficiente para encontrar informações sobre
        farmácias.
      </SC.Description>
    </SC.Container>
  );
};
