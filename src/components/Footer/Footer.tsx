import React from 'react';

import * as SC from './styles';

export const Footer = (): JSX.Element => {
  return (
    <SC.Container>
      Desenvolvido para{' '}
      <a
        href="https://www.fai-mg.br/vestibular-2025/"
        target="_blank"
        rel="noreferrer"
      >
        FAITEC 2024
      </a>{' '}
      por{' '}
      <a
        href="https://www.linkedin.com/in/dennys-william-237159249//"
        target="_blank"
        rel="noreferrer"
      >
        Dennys William
      </a>
    </SC.Container>
  );
};
