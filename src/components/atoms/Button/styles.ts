import styled from "styled-components";

export const SmallButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  gap: 4px;
  width: 58px;
  height: 26px;
  border-radius: 50px;
  background-color: ${({theme}) => theme.btnsmallbackgroundColor};
  color: ${({theme}) => theme.btntextColor};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  
  /* text */
  font-family: ${({theme}) => theme.typography.buttonFont};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;

  :hover {
    background-color: ${({theme}) => theme.btnsmallbackgroundColor};
  }

  :active {
    background-color: ${({theme}) => theme.btndisabledbackgroundColor};
  }
`;

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 64px;
  gap: 4px;
  width: 100%;
  height: 56px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.btnbackgroundColor};
  color: ${({theme}) => theme.primarybtntextColor};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  
  /* text */
  font-family: ${({theme}) => theme.typography.buttonFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;

  :hover {
    background-color: ${({theme}) => theme.btnbackgroundColor};
  }

  :active {
    background-color: ${({theme}) => theme.btndisabledbackgroundColor};
  }
`;
