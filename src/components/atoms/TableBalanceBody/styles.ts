import styled from 'styled-components'

export const Body = styled.tbody`
  width: 100%;
  display: flex;
`

export const TR = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;
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
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.table.body.text};
`

export const Icon = styled.img`
  margin-right: 5px;
`
