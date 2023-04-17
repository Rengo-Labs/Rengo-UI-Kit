import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.btnbackgroundColor};
  color: ${({ theme }) => theme.primarybtntextColor};
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  height: 52px;
  max-width: 184px;
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
`;

export const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.primarybtntextColor};
  background-color: ${({ theme }) => theme.btnbackgroundColor};
`;
