import styled, {css, keyframes } from 'styled-components'
import { NoticationTypes, NotificationPositions } from './types';

interface Props {
  position?: string
  type?: string
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

export const Backdrop = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary.default};
  opacity: 0.5;
`;

export const Container = styled.div<Props>`
  position: fixed;
  z-index: 99999;
  top: 137px;
  border-radius: 8px;
  padding: 15px 13.75px 10px 27px;
  gap: 10px;
  display: flex;
  justify-content: space-between;
  animation: ${fadeIn} 0.2s ease-in;

  ${({ isMobile }) => isMobile && css`width: 90%;` }

  ${({ position, isMobile }) => {
    if (isMobile) {
      return css`
        left: 50%;
        transform: translateX(-50%);
      ` 
    }

    if (NotificationPositions.TopRight === position) {
      return css`
        right: 20px;
      `
    }

    if (NotificationPositions.TopCenter === position) {
      return css`
        left: 50%;
        transform: translateX(-50%);
      `
    }

    if (NotificationPositions.TopLeft === position) {
      return css`
        left: 20px;
      `
    }
  }}

  border: ${({ type, theme }) => {
    if (NoticationTypes.Error === type) {
      return `2px solid ${theme.border.notification.error}`;
    }

    if (NoticationTypes.Success === type) {
      return `2px solid ${theme.border.notification.success}`;
    }

    if (NoticationTypes.Info === type) {
      return `2px solid ${theme.border.notification.info}`;
    }
  }};

  background-color: ${({ theme }) => theme.background.notification.default }
`;

export const SubContainer = styled.div<Props>`
  gap: 8px;
  display: flex;
  align-items: flex-start;
`;

export const Title = styled.p<{ isMobile: boolean }>`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;

  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.notification.title };
  margin-right: ${({ isMobile }) => isMobile ? '0px' : '120px' };
`;

export const Message = styled.p`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  color: ${({ theme }) => theme.color.notification.message };
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.02em;

  a {
    color: ${({ theme }) => theme.color.notification.anchor };
    text-decoration: none;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const IconWrapper = styled.div`
  padding-top: 5px;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
`;