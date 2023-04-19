import styled, { css, keyframes } from 'styled-components'
import { CopiedProps } from './types';

interface Props  {
  isLast?: boolean
  isCopied?: boolean
  isWalletAddressRow?: boolean
  isBeingHovered?: boolean
  src?: string
  isMobile?: boolean
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 100%;
  background: ${({ theme }) => theme.background.wallet.connectedOptions};
  border-radius: 16px;
`;

export const DialogHeaderContainer = styled.div<Props>`
  width: 95%;
  display: flex;
  justify-content: center;
  height: 50px;
  border-top-left-radius: ${({ isMobile }) => isMobile ? '0px' : '16px'};
  border-top-right-radius: ${({ isMobile }) => isMobile ? '0px' : '16px'};
  background: ${({ theme }) =>  theme.background.wallet.connectedOptions};
  padding: 0 16px 0 16px;
`;

export const DialogHeader = styled.div`
  height: 100%;
  width: 100%;
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

export const Row = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ isMobile }) => isMobile ? 'space-between;' : 'flex-end;' };
  align-items: center;
  padding: 16px 32px;
  gap: 10px;
  width: 100%;
  height: 56px;
  border-top: ${({ theme }) => `1px solid ${theme.border.wallet}`};
  cursor: pointer;
  background: ${({ isCopied, theme }) => isCopied ? theme.background.wallet.copyOption : theme.background.wallet.white};

  ${({ isLast, isMobile }) => {
    if (isLast && !isMobile) {
      return css`
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    `;
    }
  }};

  ${({ isCopied }) => isCopied && css`
    transition-property: background-color;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
    animation: ${fadeIn} 0.5s ease-in;
  `};


  background: ${({ theme, isBeingHovered, isLast, isCopied }) => {
    if (isBeingHovered && isLast) {
      return theme.background.wallet.onHoverDisconnect
    }

    if (isBeingHovered && !isCopied) {
      return theme.background.wallet.onHover
    }

    if (isCopied) {
      return theme.background.wallet.copyOption
    }

    return theme.background.wallet.connectedOptions
  }};
`;

export const RowTitle = styled.p<Props>`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${({ isLast, theme, isCopied}) => {
    if (isCopied) {
      return theme.background.wallet.white;
    }

    if (isLast) {
      return theme.color.error.disconnect;
    } else {
      return  theme.color.modalText;
    }
  }};

  color: ${({ theme, isBeingHovered }) => isBeingHovered ? theme.background.wallet.white : 'none;'};
`;

export const Image = styled.svg<Props>`
  height: 24px;
  width: 24px;
  fill: white;
  background-color: ${({isLast, isBeingHovered, theme}) => {
    if (isLast && isBeingHovered) {
      return theme.background.wallet.white
    }
    
    return theme.background.wallet.onHoverDisconnect
  }};
  mask: ${({ src }) => `url(${src}) no-repeat center`};
`;
