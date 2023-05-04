import styled from 'styled-components'

export const Body = styled.tbody`
  width: 100%;
  display: flex;
`;

export const TR = styled.tr<{ cryptoColumnWidth: number }>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;
  width: 100%;
`
export const TD = styled.td<{ isCryptoColumn: boolean, cryptoColumnWidth: number }>`
  flex: 1;
  width: ${({ cryptoColumnWidth, isCryptoColumn }) => isCryptoColumn && `${cryptoColumnWidth}px` };
  min-height: 32px;
  padding: 10px 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: ${({ isCryptoColumn }) => isCryptoColumn ? 'flex-start' : 'center' };
  flex-wrap: wrap;
  gap: 2px;
  overflow-wrap: anywhere;
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
