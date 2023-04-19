import styled from 'styled-components'

interface Props {
  isMobile: boolean
}

export const ButtonWrapper = styled.button<Props>`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.btnbackgroundColor};
  color: ${({ theme }) => theme.primarybtntextColor};
  padding: ${({ isMobile }) => isMobile ? '8px': '10px'};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  height: ${({ isMobile }) => isMobile ? '36px': '52px'};
  max-width: ${({ isMobile }) => isMobile ? '101px': '184px'};
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  overflow: hidden;
`;

export const TextIconTouchable = styled.img`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.primarybtntextColor};
  background-color: ${({ theme }) => theme.btnbackgroundColor};
`;
