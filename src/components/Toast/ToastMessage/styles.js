import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
  `,
  sucess: css`
    background: ${({ theme }) => theme.colors.sucess.main};
  `,

  error: css`
    background: ${({ theme }) => theme.colors.danger.main};
  `,
};

export const Container = styled.div`
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ type }) => containerVariants[type] || containerVariants.default}


  img {
    margin-right: 8px;
  }

  & + & {
    margin-top: 12px;
  }
`;
