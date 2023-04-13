import React from 'react'
import { TD, TR, Text, Icon } from './styles'
import { IHeader } from '../../molecules'

interface TableProps {
  row: IHeader
}

const TableBody = ({ row }: TableProps) => {
  console.log('row', row)
  return (
    <TR>
      {Object.keys(row).map((key: string) => {
        console.log('key', key)
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
  )
}

export default TableBody
