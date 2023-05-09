import styled from 'styled-components'

interface IWrapperProps {
  isMobile: boolean
}

export const Wrapper = styled.table<IWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme, isMobile }) =>
    isMobile ? 'transparent' : theme.color.table.header.background};
  border-radius: 16px;
`

export const Body = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`