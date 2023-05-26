import React, { Ref } from 'react'
import { TR, Text, TD, Head, Icon } from './styles'
import { ChevronUp, ChevronDown } from 'react-feather'

interface Column {
  key: string
  name: string
  isSorteable: boolean
  width?: string
}

interface TableHeaderProps {
  columns: Column[]
  onSort: (key: string, isAscending: boolean) => void
  firstColumnRef?: Ref<HTMLTableCellElement>
}

export const TableHeader = ({ columns, onSort, firstColumnRef }: TableHeaderProps) => {
  
  return (
    <Head>
      <TR columnsQty={columns.length}>
        {columns.map((column, i) => {
        const Ref = column.key === 'crypto' || column.key === 'pool' ? firstColumnRef : null;
          return (
            <TD key={column.key} ref={Ref} customWidth={column.width} isFirstColumn={i === 0} lastColumn={i === columns.length -1}>
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
          )}
        )}
      </TR>
    </Head>
  )
}

export default TableHeader
