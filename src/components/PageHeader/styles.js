import styled from 'styled-components';

export const Container = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 8px;
    font-size: 24px;
  }
`;
