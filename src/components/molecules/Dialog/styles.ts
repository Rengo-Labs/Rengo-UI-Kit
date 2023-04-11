import styled, { createGlobalStyle } from 'styled-components'

export const Backdrop = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #715FF5;
  opacity: ${props => (props.isOpen ? 0.5 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  z-index: 100;

  // Any additional styles you want to add
`;


export const Container = styled.dialog<{ isOpen?: boolean }>`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  z-index: 999;
  background: ${({ theme }) =>  theme.background.searchInput};
  border: ${({ theme }) => `1px solid ${theme.border.default}`};
  box-shadow: 0px 0px 15px 15px rgba(227, 223, 253, 0.05);
  border-radius: 16px;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none !important'}
`;

export const DialogHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  box-shadow: 0px 0px 15px 15px rgba(227, 223, 253, 0.05);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: ${({ theme }) =>  theme.background.searchInput};
  border-bottom: ${({ theme }) => `1px solid ${theme.border.default}`};
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
  color: ${({ theme }) => theme.color.primary.default};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;