import styled from 'styled-components'

export const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  width: 386px;
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


export const DialogHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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

export const ToggleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0 32px 0;
`;