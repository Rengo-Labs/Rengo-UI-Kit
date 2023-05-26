import styled, { css } from 'styled-components'

interface IWrapperProps {
  isMobile: boolean;
}

export const Wrapper = styled.table<IWrapperProps>`
  width: 100%;
  background-color: ${({theme, isMobile}) => isMobile ? 'transparent' : theme.color.table.header.background};
  border-radius: 16px;
  border-collapse: collapse;
`
export const Body = styled.tbody<{ isMobile?: boolean}>`
  ${({ isMobile }) => isMobile && css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `}
`;