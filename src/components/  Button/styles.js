import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: 52px;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 0 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  transition: background 0.15s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }

  ${({ danger, theme }) => danger && css`

    background:  ${theme.colors.danger.main};

    &:hover {
      background:  ${theme.colors.danger.light};
    }

    &:active {
      background:  ${theme.colors.danger.dark};
    }
  `};

`;
