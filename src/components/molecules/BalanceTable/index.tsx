import React, { useState } from 'react'
import TableBody from '../../atoms/TableBalanceBody'
import TableHeader from '../../atoms/TableHeader'
import { Wrapper } from './styles'
import btcTokenIcon from '../../../assets/icons/bitcoin-token.svg'
import ethTokenIcon from '../../../assets/icons/eth-token.svg'
import usdtTokenIcon from '../../../assets/icons/tether-token.svg'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'
import { BalanceMobileItem } from '../../atoms'

export interface IHeader {
  id: number
  crypto: string
  cryptoIcon: string
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
    cryptoIcon: btcTokenIcon,
    mycrypto: 0.0062,
    '24h': '45.92%',
    '7d': '51.92%',
    '15d': '90.5%',
    '30d': '90.5%'
  },
  {
    id: 2,
    crypto: 'Ethereum',
    cryptoIcon: ethTokenIcon,
    mycrypto: 0.0162,
    '24h': '45.92%',
    '7d': '45.92%',
    '15d': '80.5%',
    '30d': '99.5%'
  },
  {
    id: 3,
    crypto: 'Usdt',
    cryptoIcon: usdtTokenIcon,
    mycrypto: 0.00062,
    '24h': '45.92%',
    '7d': '56.92%',
    '15d': '70.5%',
    '30d': '92.5%'
  }
]

export const BalanceTable = () => {
  const [balanceData, setBalanceData] = useState<IHeader[]>(data)
  const deviceType = useDeviceType()

  const isMobile = deviceType === DeviceType.MOBILE

  const handleSort = (key: string, isAscending: boolean) => {
    const sortedData = [...balanceData].sort((a, b) => {
      const sortMultiplier = isAscending ? 1 : -1
      return a[key as keyof IHeader] > b[key as keyof IHeader]
        ? sortMultiplier
        : -sortMultiplier
    })
    setBalanceData(sortedData)
  }

  return (
    <Wrapper isMobile={isMobile}>
      {!isMobile && (
        <TableHeader columns={columns} onSort={handleSort} />
      )}
      {balanceData.map((row) =>
        isMobile ? (
          <BalanceMobileItem key={row.id} row={row} />
        ) : (
          <TableBody key={row.id} row={row} />
        )
      )}
    </Wrapper>
  )
  
}
