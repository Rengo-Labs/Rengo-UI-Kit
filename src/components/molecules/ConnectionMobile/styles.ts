import styled from 'styled-components'

interface IContainerProps {
  isOpen: boolean
}

export const Container = styled.div<IContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(100vw)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  background: ${({ theme }) =>  theme.background.searchInput};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DialogHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  box-shadow: 0px 0px 15px 15px rgba(227, 223, 253, 0.05);
  padding: 40px 0 33px 0;
`;

export const DialogHeader = styled.div`
  height: 100%;
  width: 380px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background: ${({ theme }) =>  theme.background.searchInput};
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 16px 0;
`;

export const DialogFooter = styled.div`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  padding: 16px 0;
  cursor: pointer;
  color: ${({ theme }) => theme.color.modalText};
`;
