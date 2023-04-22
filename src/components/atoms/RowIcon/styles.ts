import styled from 'styled-components'
import { IconSize } from './types';

interface Props {
  iconSize?: IconSize
  src: string
  alt: string
}

export const Container = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TokenContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  /* margin: 16px 0 16px 5px; */
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.tab.hover};
  }
  
  &:focus {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.tab.hover};
  }
`;

export const TokenNamesContainer = styled.div`

`;

export const TokenName = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  font-weight: 600;
  color: ${({ theme }) => theme.color.default};
`;

export const TokenFullName = styled.p`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.default};
`;

export const Image = styled.img<Props>`
  height: ${({ iconSize }) =>  iconSize === IconSize.Small ? `${IconSize.Small}px` : `${IconSize.Large}px`};
`;
