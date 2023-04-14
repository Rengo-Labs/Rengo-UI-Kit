import React from 'react'
import { TR, Text, TD, Head, Icon } from './styles'
import { ChevronUp, ChevronDown } from 'react-feather'

interface Column {
  key: string
  name: string
  isSorteable: boolean
}

interface TableHeaderProps {
  columns: Column[]
  onSort: (key: string, isAscending: boolean) => void
}

export const TableHeader = ({ columns, onSort }: TableHeaderProps) => {

  return (
    <Head>
      <TR>
        {columns.map((column) => (
          <TD key={column.key}>
            <Text>{column.name}</Text>
            {column.isSorteable && (
              <Icon>
                <ChevronUp
                  size={16}
                  style={{ marginBottom: '-3px' }}
                  onClick={() => onSort(column.key, true)}
                />
                <ChevronDown
                  size={16}
                  style={{ marginTop: '-3px' }}
                  onClick={() => onSort(column.key, false)}
                />
              </Icon>
            )}
          </TD>
        ))}
      </TR>
    </Head>
  )
}

export default TableHeader
