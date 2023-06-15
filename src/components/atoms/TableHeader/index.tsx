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
  HeadTRRef?: Ref<HTMLTableCellElement>
  centerItems?: boolean
}

export const TableHeader = ({ columns, onSort, HeadTRRef, centerItems }: TableHeaderProps) => {
  
  return (
    <Head>
      <TR ref={HeadTRRef as  Ref<any>} columnsQty={columns.length} centerItems={centerItems}>
        {columns.map((column, i) => {
          return (
            <TD key={column.key}  customWidth={column.width} isFirstColumn={i === 0}>
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
