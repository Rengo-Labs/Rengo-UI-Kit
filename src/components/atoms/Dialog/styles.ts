import styled, { css } from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  z-index: 888;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary.default};
  opacity: 0.5;
`;

export const Container = styled.dialog<{ isOpen?: boolean, isMobile: boolean, withoutEffect: boolean }>`

  top: ${({ withoutEffect }) => withoutEffect ? '0px' : '50%'};
  left: ${({ withoutEffect }) => withoutEffect ? '0px' : '50%'};
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  z-index: 900;
  background: ${({ theme }) =>  theme.background.wallet.connectedOptions};
  border: ${({ theme }) => `1px solid ${theme.border.default}`};
  box-shadow: 0px 0px 15px 15px rgba(227, 223, 253, 0.05);
  border-radius: ${({ isMobile }) => isMobile ? '0px' : '16px'};

  ${({ isMobile }) => isMobile && css`
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 9999;
  `}

  ${({ isMobile, isOpen }) => {
    if (!isMobile) {
      return
    }

    if (isOpen) {
      return css`
        transform: translateX(0);
      `
    } else {
      return css`
        transform: translateX(200vw);
      `
    }
  }}

  display: ${({ isMobile, isOpen }) => {
    if (!isMobile && !isOpen ) {
      return 'none'
    }

    return 'flex'
  }};
`;
