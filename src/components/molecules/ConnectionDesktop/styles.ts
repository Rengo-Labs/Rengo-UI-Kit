import styled from 'styled-components'

export const Container = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  width: 348px;
  margin-top: 16px;
`;

export const DialogHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  box-shadow: 0px 0px 15px 15px rgba(227, 223, 253, 0.05);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: ${({ theme }) =>  theme.color.tab.background};
  padding: 40px 0 33px 0;
`;

export const DialogHeader = styled.div`
  height: 100%;
  width: 380px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
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

export const DialogBodyText = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.default};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const WalletsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  padding: 16px 0;
`;

export const DialogFooter = styled.div`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  padding: 8px 0;
  cursor: pointer;
  color: ${({ theme }) => theme.color.modalText};
`;
