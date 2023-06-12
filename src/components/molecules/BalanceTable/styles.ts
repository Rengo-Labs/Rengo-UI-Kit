import styled from 'styled-components'

interface IWrapperProps {
  isMobile: boolean;
}

export const Body = styled.tbody`
  width: 100%;
  display: flex;
  flex-direction: column;
`;


export const Wrapper = styled.table<IWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  background-color: ${({theme, isMobile}) => isMobile ? 'transparent' : theme.color.table.header.background};
  border-radius: 16px;
`