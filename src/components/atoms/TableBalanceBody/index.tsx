import React from 'react'
import { TD, TR, Text, Icon, Body } from './styles'
import { IHeader } from '../../molecules'

interface TableProps {
  row: IHeader
  heightIcon: number
  widthIcon: number
}

export const TableBalanceBody = ({ row, heightIcon, widthIcon }: TableProps) => {
  return (
    <Body>
      <TR>
        {Object.keys(row).map((key: string) => {
          if (key !== 'id' && key !== 'cryptoIcon') {
            return (
              <TD key={key}>
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
