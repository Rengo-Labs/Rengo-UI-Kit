import styled, { css } from 'styled-components'

export const Head = styled.thead`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.table.header.text};
  padding: 20px 16px 20px 0;
  th {
    text-align: left;
    white-space: nowrap;
  }
`

export const TR = styled.tr`
  width: 100%;
  gap: 15px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`

export const TD = styled.th<{ customWidth?: string, isFirstColumn?: boolean, lastColumn?: boolean }>`
  ${({ customWidth }) => !customWidth && css`
    flex: 1;
  `
  }
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: ${({ isFirstColumn, lastColumn }) => isFirstColumn || lastColumn ? 'center' : 'flex-start'};
  gap: 10px;
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
