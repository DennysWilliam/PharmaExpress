import styled, { css } from 'styled-components';

export const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 16px;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      opacity: 0.2;
      cursor: not-allowed;
    `}
`;
