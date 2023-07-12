import React from 'react'
import { TD, TR, Text, Icon, Body } from './styles'
import { IHeader } from '../../molecules'

interface TableProps {
  networkLink: string
  row: IHeader
  heightIcon: number
  widthIcon: number
  cryptoColumnWidth: string[]
}

const DLL_COLUMNS = ['marketprice', 'mybalance']

export const TableBalanceBody = ({ networkLink, row, heightIcon, widthIcon, cryptoColumnWidth }: TableProps) => {
  const redirectToNetwork = (hash: string) => {
    const link = `${networkLink}${hash}`
    window.open(link, '_blank')
  }

  return (
      <TR cryptoColumnWidth={cryptoColumnWidth}>
        {Object.keys(row).filter(key => key !== 'contractPackage').map((key: string) => {
          if (key !== 'id' && key !== 'cryptoIcon') {
            const isCryptoColumn = key === 'crypto'

            return (
              <TD
                key={key}
                isCryptoColumn={isCryptoColumn}>
                {key === 'crypto' && (
                  <Icon src={row['cryptoIcon'] as string} alt={key} sizes='14' height={heightIcon} width={widthIcon}/>
                )}
                {
                  key === 'crypto' && (
                    <Text linkable={true} onClick={() => redirectToNetwork(row['contractPackage'])}>{row[key as keyof IHeader]}</Text>
                  )
                }
                {
                  DLL_COLUMNS.includes(key) && (
                    <Text>${row[key as keyof IHeader]}</Text>
                  )
                }
                {
                  key !== 'crypto' && !DLL_COLUMNS.includes(key) && key !== 'mypools' && (
                    <Text>{row[key as keyof IHeader]}{key !== 'mycrypto' && key !== 'crypto' && '%'}</Text>
                  )
                }
                {
                  key !== 'crypto' && !DLL_COLUMNS.includes(key) && key === 'mypools' && (
                    <Text>{'$'}{row[key as keyof IHeader]}</Text>
                  )
                }
              </TD>
            )
          }
        })}
      </TR>
  )
}
