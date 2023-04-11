import styled from 'styled-components'
import { X } from 'react-feather'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.tab.background};
  border-radius: 16px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;  
  width: 100%;
`
export const KeyPairWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const KeyStyle = styled.div`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.keyPairText.keyTextColor};
`

export const ValueStyle = styled.div`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.default};
`

export const CloseIcon = styled(X)`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.color.modalText};
  user-select: none;
  margin-right: 10px;
`
