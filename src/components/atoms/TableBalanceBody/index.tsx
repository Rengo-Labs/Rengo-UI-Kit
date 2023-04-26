import React from 'react'
import { TD, TR, Text, Icon, Body } from './styles'
import { IHeader } from '../../molecules'

interface TableProps {
  row: IHeader
}

export const TableBalanceBody = ({ row }: TableProps) => {
  return (
    <Body>
      <TR>
        {Object.keys(row).map((key: string) => {
          if (key !== 'id' && key !== 'cryptoIcon') {
            return (
              <TD key={key}>
                {key === 'crypto' && (
                  <Icon src={row['cryptoIcon'] as string} alt={key} sizes='14' />
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
