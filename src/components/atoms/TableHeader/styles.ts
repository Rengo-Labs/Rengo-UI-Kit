import styled from 'styled-components'

export const Head = styled.thead`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.table.header.text};
`

export const TR = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  width: 100%;
`

export const TD = styled.td`
  flex: 1;
  min-height: 32px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`

export const Text = styled.p`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.table.header.text};
`

export const Icon = styled.span`
  color: ${({ theme }) => theme.color.table.header.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
