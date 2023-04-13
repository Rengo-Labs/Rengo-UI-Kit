import React from 'react'
import { TD, TR, Text } from './styles'
import { IHeader } from '../../molecules'

interface TableProps {
  row: IHeader
}

const TableBody = ({row}: TableProps) => {
  console.log('row',row)
  return (
    <TR>
      {
        Object.keys(row).map((key: string) => {
          console.log('key',key)
          if (key !== 'id') {
            return (
              <TD key={key}>
                <Text>{row[key as keyof IHeader]}</Text>
              </TD>
            )
          }
        })
      }
    </TR>
  )
  
}


export default TableBody
