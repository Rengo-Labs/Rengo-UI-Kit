import styled from 'styled-components'

export const Container = styled.div<{ isMobile: boolean, isOpen: boolean }>`
  width: ${({ isMobile }) => isMobile ? '100vw' : '450px' };
  height: ${({ isMobile }) => isMobile ? '100vh' : 'none' };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TopSubContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DialogHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 58px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: ${({ theme }) =>  theme.background.wallet.connectedOptions};
  border-bottom: ${({ theme }) => `1px solid ${theme.border.dialog}`};
`;

export const DialogHeader = styled.div<{ isMobile: boolean }>`
  height: 100%;
  /* width: 386px; */
  width: ${({ isMobile }) => isMobile ? '100%' : '386px' };
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

export const InnerContainer = styled.div<{ isMobile: boolean }>`
  /* width: 386px; */
  width: ${({ isMobile }) => isMobile ? '100%' : '386px' };
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: ${({ theme }) => `1px solid ${theme.border.default}`};
`;

export const ViewTokenListTitle = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.tab.textActive};
  cursor: pointer;
`;

export const PopularTokens = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: ${({ theme }) => `1px solid ${theme.border.default}`};
  margin: 16px auto;
  overflow-x: scroll;
  height: 100px;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar:window-inactive {
  display: none;
}

::-webkit-scrollbar-thumb  {
  height: 5px;
  width: 4px;
  background-color: ${({ theme }) => theme.color.modalText};
  border-radius: 6px;
}

::-webkit-scrollbar-corner {
  background: transparent ;
}
`;

export const PopularTokensTitle = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.tab.textActive};
  letter-spacing: 0.02em;
`;

export const PopularTokensItemsContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  gap: 16px;
  padding-top: 30px;
`;

export const PopularTokensItem = styled.div`
  max-width: 133px;
  height: 42px;
  flex-shrink: 0;
`;

export const TokenListContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  margin-top: 24px;
`;

export const SectionTitle = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.tab.textActive};
  letter-spacing: 0.02em;
  position: fixed;
`;

export const BalanceSectionTitle = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.tab.textActive};
  letter-spacing: 0.02em;
`;

export const SearchInputContainer = styled.div`
  margin: 16px auto;
`;

export const TokenNotFoundText = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.tab.textActive};
  letter-spacing: 0.02em;
  text-align: center;
  margin: 16px auto;
`;
