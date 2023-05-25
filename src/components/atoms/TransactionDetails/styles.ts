import { ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components'
import { Distribution, IconSize } from './types';

interface Props {
  distribution?: Distribution
  tokenNames?: Array<string>
  tokenNameSymbol?: ReactNode
  children?: any
  leftAdornment?: ReactNode | ReactElement
  iconSize?: IconSize
  isLast?: boolean
  containerWidth?: string
  optIconExists?: boolean
}

export const Wrapper = styled.div<Props>`
  width: ${({ containerWidth }) => containerWidth};
  display: flex;
  align-items: center;
  justify-content: ${({ distribution }: Props) => distribution};
  background: ${({ theme }) => theme.color.tab.background};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.tab.hover};
  }
  
  &:focus {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.tab.hover};;
  }
`;

export const TokenInnerWrapper = styled.div<Props>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: ${({ distribution }) => {
    if (Distribution.Center !== distribution) {
      return '16px 0 16px 0;'
    }

    return '16px 0 16px 0;'
  }};
`;

export const Image = styled.img<Props>`
  height: ${({ iconSize }) =>  iconSize === IconSize.Small ? `${IconSize.Small}px` : `${IconSize.Large}px`};
`;

export const LeftAdornmentWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  margin-right: ${({ distribution }) => Distribution.Center !== distribution ? '5px' : '0px'};
  cursor: pointer;
`;

export const TokenDetailsWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${({ tokenNameSymbol }) => !tokenNameSymbol ? 'column' : 'row' };
  align-items: flex-start;
`;

export const TokenNamesWrapper = styled.div<Props>`
  height: 100%;
  display: flex;
  gap: 5px;

  padding-left: ${({ tokenNames, distribution }) =>{
    if (distribution !== Distribution.Center && distribution !== Distribution.SpaceEvenly) {
      return '0px;'
    }

    return '16px;'
  }};

  flex-direction: ${({tokenNames}) => {
    if (tokenNames && tokenNames?.length > 1) {
      return 'column;'
    }
    return 'row;'
  } };
`;

export const TokenName = styled.p<Props>`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  font-weight: 400;
  color: ${({ theme }) => theme.color.keyPairText.keyTextColor};
`;

export const TokenFullName = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.default};
  text-align: start;
  overflow-wrap: anywhere;
`;

export const TokenNameSymbol = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.textInactive};
  text-transform: uppercase;
  padding-left: 5px;
`;

export const TokenNameSymbolWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AmountWrapper = styled.div<Props>`
  height: 100%;
  max-width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-weight: 400;
  overflow-wrap: anywhere;
  padding: 16px 0px 16px 0px;
  font-size: ${({ distribution }) => {
    if (distribution !== Distribution.Center) {
      return '16px;'
    }

    return '18px;'
  }};

  line-height: ${({ distribution }) => {
    if (distribution !== Distribution.Center) {
      return '24px;'
    }

    return '26px;'
  }};
  letter-spacing: 0.02em;
  color: ${({ theme, containerWidth }) => {
    if (containerWidth !== '100%') {
      return theme.color.modalText
    }

    return theme.color.default
  }};
`;

export const IconImage = styled.img<Props>`
  ${({ optIconExists }) => {
    if (optIconExists) {
      return css`
        &:first-child {
          margin-right: -15px;
        }

        &:nth-child(2) {
          margin-left: -15px;
        }
      `;
      }
  }}
`;

export const TokenNamesInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
