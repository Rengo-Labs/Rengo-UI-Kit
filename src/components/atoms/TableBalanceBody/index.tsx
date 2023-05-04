import React from 'react'
import { TD, TR, Text, Icon, Body } from './styles'
import { IHeader } from '../../molecules'

interface TableProps {
  row: IHeader
  heightIcon: number
  widthIcon: number
  cryptoColumnWidth: number
}

export const TableBalanceBody = ({ row, heightIcon, widthIcon, cryptoColumnWidth }: TableProps) => {
  return (
    <Body>
      <TR cryptoColumnWidth={cryptoColumnWidth}>
        {Object.keys(row).map((key: string) => {
          if (key !== 'id' && key !== 'cryptoIcon') {
            const isCryptoColumn = key === 'crypto'

            return (
              <TD
                key={key}
                isCryptoColumn={isCryptoColumn}
                cryptoColumnWidth={cryptoColumnWidth}>
                {key === 'crypto' && (
                  <Icon src={row['cryptoIcon'] as string} alt={key} sizes='14' height={heightIcon} width={widthIcon}/>
                )}
                <Text>{row[key as keyof IHeader]}</Text>
              </TD>
            )
          }
        })}
      </TR>
    </Body>
  )
}
