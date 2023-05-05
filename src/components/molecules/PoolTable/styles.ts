import styled from 'styled-components'

interface IWrapperProps {
  isMobile: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  background-color: ${({theme, isMobile}) => isMobile ? 'transparent' : theme.color.table.header.background};
  border-radius: 16px;
  padding: 0 0 10px 10px;
`
export const Body = styled.tbody`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:20px;
`;