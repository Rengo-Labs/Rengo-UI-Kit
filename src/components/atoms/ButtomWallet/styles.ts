import styled from 'styled-components';

export const ButtonWalletDesktop = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 32px;
  gap: 4px;
  background-color: ${({theme}) => theme.btnbackgroundColor};
  border-radius: 8px;
  flex: none;
  order: 1;
  flex-grow: 0;
  border: none;

  :hover {
    background-color: ${({theme}) => theme.btnbackgroundColor};
  }

  :active {
    background-color: ${({theme}) => theme.btndisabledbackgroundColor};
  }
`;

export const ButtonWalletMobile = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  background-color: ${({theme}) => theme.btnbackgroundColor};
  border-radius: 4px;
  flex: none;
  order: 2;
  flex-grow: 0;
  border: none;

  :hover {
    background-color: ${({theme}) => theme.btnbackgroundColor};
  }

  :active {
    background-color: ${({theme}) => theme.btndisabledbackgroundColor};
  }
`;

export const ButtonWalletText = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #5B4BC9;
`;

export const ButtonWalletIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 2px;
`;
