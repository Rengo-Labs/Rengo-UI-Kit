import React, {useEffect, useRef, useState} from 'react'
import TableHeader from '../../atoms/TableHeader'
import { Wrapper } from './styles'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'
import { BalanceMobileItem, TableBalanceBody } from '../../atoms'

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

export interface BalaceTableProps {
  data: IHeader[]
  widthIcon?: number
  heightIcon?: number
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
    isSorteable: true
  }
]

export const BalanceTable = ({
  data,
  widthIcon = 30,
  heightIcon = 30
}: BalaceTableProps) => {
  const [balanceData, setBalanceData] = useState<IHeader[]>([])
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE
  const cryptoColumnRef = useRef<HTMLTableCellElement>(null);
  const cryptoColumnWidth = cryptoColumnRef.current?.clientWidth || 0

  useEffect(() => {
    setBalanceData(data)
  }, [data])

  const handleSort = (key: string, isAscending: boolean) => {
    const sortedData = [...balanceData].sort((a, b) => {
      const sortMultiplier = isAscending ? 1 : -1
      return a[key as keyof IHeader] > b[key as keyof IHeader]
        ? sortMultiplier
        : -sortMultiplier
    })
    setBalanceData(sortedData)
  }

  console.log('get the width', cryptoColumnWidth);
  

  return (
    <Wrapper isMobile={isMobile}>
      {!isMobile && (
        <TableHeader
          columns={columns}
          onSort={handleSort}
          cryptoColumnRef={cryptoColumnRef} />
      )}
      {balanceData.map((row) =>
        isMobile ? (
          <BalanceMobileItem
            key={row.id}
            row={row}
            widthIcon={widthIcon}
            heightIcon={heightIcon}
          />
        ) : (
          <TableBalanceBody
            key={row.id}
            row={row}
            widthIcon={widthIcon}
            heightIcon={heightIcon}
            cryptoColumnWidth={cryptoColumnWidth}
          />
        )
      )}
    </Wrapper>
  )
}
