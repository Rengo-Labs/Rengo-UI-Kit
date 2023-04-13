import React, { useState } from 'react'
import TableBody from '../../atoms/TableBody'
import TableHeader from '../../atoms/TableHeader'
import { Wrapper } from './styles'

export interface IHeader {
  id: number
  crypto: string
  mycrypto: number
  '24h': string
  '7d': string
  '15d': string
  '30d': string
}

const columns = [
  {
    key: 'crypto',
    name: 'Crypto',
    isSorteable: true
  },
  {
    key: 'mycrypto',
    name: 'My Crypto',
    isSorteable: true
  },
  {
    key: '24h',
    name: '24 H',
    isSorteable: true
  },
  {
    key: '7d',
    name: '7 D',
    isSorteable: true
  },
  {
    key: '15d',
    name: '15 D',
    isSorteable: true
  },
  {
    key: '30d',
    name: '30 D',
    isSorteable: false
  }
]

const data: IHeader[] = [
  {
    id: 1,
    crypto: 'Bitcoin',
    mycrypto: 0.0062,
    '24h': '45.92%k',
    '7d': '51.92%k',
    '15d': '90.5%',
    '30d': '90.5%'
  },
  {
    id: 2,
    crypto: 'Ethereum',
    mycrypto: 0.0162,
    '24h': '45.92%k',
    '7d': '45.92%k',
    '15d': '80.5%',
    '30d': '99.5%'
  },
  {
    id: 3,
    crypto: 'Bitcoin Cash',
    mycrypto: 0.00062,
    '24h': '45.92%k',
    '7d': '56.92%k',
    '15d': '70.5%',
    '30d': '92.5%'
  }
]

interface TableHeaderState {
  activeColumn: string
  isAscending: boolean
}

export const LiquidityTable = () => {
  const [balanceData, setBalanceData] = useState<IHeader[]>(data)

  const handleSort = (key: string, isAscending: boolean) => {
    const sortedData = [...balanceData].sort((a, b) => {
      const sortMultiplier = isAscending ? 1 : -1
      return a[key as keyof IHeader] > b[key as keyof IHeader] ? sortMultiplier : -sortMultiplier
    })
    setBalanceData(sortedData)
  }

  return (
    <Wrapper>
      <TableHeader columns={columns} onSort={handleSort} />
      {balanceData.map((row) => (
        <TableBody key={row.id} row={row} />
      ))}
    </Wrapper>
  )
}
