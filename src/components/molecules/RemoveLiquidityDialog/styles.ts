import styled from 'styled-components'

export const Container = styled.div<{ isMobile: boolean }>`
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div<{ isMobile: boolean}>`
  width: ${({ isMobile }) => isMobile ? '80%': '386px' };
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SliderContainer = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TransactionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DialogHeaderContainer = styled.div<{ isMobile: boolean}>`
  display: flex;
  justify-content: center;
  width: ${({ isMobile }) => isMobile ? '80%': '100%' };
  height: 50px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  /* background: ${({ theme }) =>  theme.background.searchInput}; */
  background: ${({ theme }) =>  theme.background.wallet.connectedOptions};
  padding: 40px 0 33px 0;
`;

export const DialogHeader = styled.div`
  height: 100%;
  width: 386px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
 
`;

export const DialogTitle = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.modalText};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const TopSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

`;

export const BottomSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0 32px 0;
`;

export const TransactionsInnerContainer = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%; 
  border-bottom: ${({ theme }) => `1px solid ${theme.border.default}`};
`;
