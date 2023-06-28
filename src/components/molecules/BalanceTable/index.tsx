import React, {useEffect, useRef, useState} from 'react'
import TableHeader from '../../atoms/TableHeader'
import { Body, Wrapper } from './styles'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'
import { BalanceMobileItem, TableBalanceBody } from '../../atoms'

export interface IHeader {
  id: number
  contractPackage: string
  crypto: string
  cryptoIcon: string
  mycrypto: number
  marketprice: number
  mybalance: number
  '24h': number
  '7d': number
  '15d': number
  '30d': number
}

export interface BalaceTableProps {
  networkLink: string
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
    key: 'marketprice',
    name: 'Market Price($)',
    isSorteable: true
  },
  {
    key: 'mybalance',
    name: 'My Balance($)',
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
  networkLink,
  data,
  widthIcon = 30,
  heightIcon = 30
}: BalaceTableProps) => {
  const [balanceData, setBalanceData] = useState<IHeader[]>([])
  const [cryptoColumnWidth, setCryptoColumnWidth] = useState<string[]>([])
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE
  const HeadTRRef = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!HeadTRRef.current) {
        return;
      }
      const gridStyle = getComputedStyle(HeadTRRef.current);
      const gridColumnTemplate = gridStyle.gridTemplateColumns;
      const columnWidths = gridColumnTemplate.split(' ');

      setCryptoColumnWidth(columnWidths);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



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

  return (
    <Wrapper isMobile={isMobile}>
      {!isMobile && (
        <TableHeader
          columns={columns}
          onSort={handleSort}
          HeadTRRef={HeadTRRef}
          centerItems={true} />
      )}
      <Body>
        {balanceData.map((row, idx) =>
          isMobile ? (
            <BalanceMobileItem
              networkLink={networkLink}
              key={row.id}
              row={row}
              widthIcon={widthIcon}
              heightIcon={heightIcon}
            />
          ) : (
              <TableBalanceBody
                key={`table-bTr-${idx}`}
                networkLink={networkLink}
                row={row}
                widthIcon={widthIcon}
                heightIcon={heightIcon}
                cryptoColumnWidth={cryptoColumnWidth}
              />
          )
        )}
      </Body>

    </Wrapper>
  )
}
