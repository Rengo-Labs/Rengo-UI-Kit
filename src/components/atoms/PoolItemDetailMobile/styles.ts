import styled from 'styled-components'
import { ImageProps } from '../../molecules/Menu/types'

export const Container = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(200vw)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  background: ${({ theme }) =>  theme.color.tab.background};
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 28px;
`;

export const InnerContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`

export const DialogHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: ${({ theme }) => theme.color.tab.background};
`

export const DialogHeader = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DialogTitle = styled.p`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.modalText};
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`


export const FavoriteIcon = styled.img`
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.color.default};
  &:active {
    transform: scale(0.9);
    filter: brightness(0.8);
  }
`

export const TokenPairWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-right: -40px;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.img.attrs<ImageProps>(({ width, height }) => ({
  width: width,
  height: height
}))<ImageProps>`
  &:first-child {
    margin-right: -15px;
  }
`

export const PoolText = styled.p`
  font-family: ${(props) => props.theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.color.default};
`

export const PoolKeyPairContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
`
export const PoolKey = styled.p`
  font-family: ${(props) => props.theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: ${(props) => props.theme.color.modalText};
`

export const PoolValue = styled.p`
  font-family: ${(props) => props.theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.color.default};
`
