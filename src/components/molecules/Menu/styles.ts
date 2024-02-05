import styled from "styled-components";
import { IMenuItem, IMenuWrapper, ImageProps } from "./types";

export const MenuWrapper = styled.div<IMenuWrapper>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.background.menu};
  padding: 18px ${props => props.isTablet ? '10px' : '70px'};
  z-index: 14;
  margin-bottom: 95px;
  gap:20px;
`;

export const LeftTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const CenterTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const MenuItem = styled.div<IMenuItem>`
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.clickable != null && props.clickable ? 'cursor: pointer; transition: all 0.2s ease-in-out;' : 'cursor: auto;'}
  
  ${props => props.clickable != null && props.clickable ?
    '&:active { transform: scale(0.95); filter: brightness(0.9);}' : ''
  }
`;

export const MenuItemText = styled.p<{size?: number}>`
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: ${({size}) => size || 16}px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.color.white};
`;

export const MenuWrapperMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 18px;
  background: ${({ theme }) => theme.background.menu};
  z-index: 1000;
`;

export const MobileMenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(100vh)'};
  transition: transform 0.3s ease-in-out;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.background.menu};
  z-index: 999;
  :first-child {
    transform: ${props => props.isOpen ? '-100%' : '0%'};
  }
  
  :nth-child(2) {
    transform: ${props => props.isOpen ? '0%' : '-100%'};
  }
  
`;

export const MobileMenuItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 100px;
    height: 100%;
    width: 100%;
`;

export const Icon = styled.img.attrs<ImageProps>(({ width, height }) => ({
    width: width,
    height: height,
  }))<ImageProps>`
    cursor: pointer;
  `;

