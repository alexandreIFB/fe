import styled from 'styled-components';

export const Select = styled.select`
  padding: 0 16px;
  height: 52px;
  width: 100%;
  border: 2px solid #fff;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  outline: 0;
  transition: border-color 0.15s ease-in;
  appearance: none;

  &::placeholder {
    color: #BCBCBC;
  }
  &:focus{
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled]{
    background: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
    color: #BCBCBC;
    opacity: 1;
  }

`;
