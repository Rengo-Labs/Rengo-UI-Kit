import styled from 'styled-components';

type TOption = {
  isOption1: boolean;
}


export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 130px;
  max-height: 43px;
  padding: 5px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.tokenOption.tokenOptionBackgroundColor};
  `;

export const TokenStyled = styled.div`
font-family: ${({ theme }) => theme.typography.secondaryFont};
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 26px;
letter-spacing: 0.02em;
color: ${({ theme }) => theme.color.tokenOption.tokenOptionTextColor};
`;

export const Ellipse = styled.div<TOption>`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${({ theme, isOption1 }) => (isOption1 ? theme.color.tokenOption.tokenOption1Color : theme.color.tokenOption.tokenOption2Color)};
`
