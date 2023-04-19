import styled from "styled-components";

export const WrapperStyled = styled.div<any>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  order: 0;
  flex-grow: 0;
  background-color: #F7FCFE;
  /*width: 91px;*/
  /*padding: 0px;*/
  cursor: pointer;
  user-select: none;
  background: ${props => props.background ?? props.theme.background.default};
  border-radius: 8px;
  padding: 10px;

  @media (min-width: 430px) {
    /*padding: 0px 10px 0px 0px;*/
    /*width: 104px;*/
    align-items: center;
  }
`;

export const NameStyled = styled.p<any>`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${(props) => props.titleColor ?? props.theme.color.default};
`;