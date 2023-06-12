import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.table.header.background};
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;
`;

export const HeaderSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  align-items: center;
  padding: 10px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 5px;
  width: 100%;
`

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Title = styled.p<any>`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.default};
  ${props => props.linkable ? 'cursor: pointer;':''}
  ${props => props.linkable ? '&:hover {color: blue;}':''}
`

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.default};
`

export const SubtitleValue = styled.p`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.table.header.text};
`
