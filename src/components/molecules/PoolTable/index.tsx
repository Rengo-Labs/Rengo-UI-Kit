import React, { useEffect, useState } from 'react'
import TableHeader from '../../atoms/TableHeader'
import { Wrapper } from './styles'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'
import { PoolItemMobile, PoolTableItem } from '../../atoms'

export interface IHeaderPool {
  pool: string
  token0Icon: string
  token1Icon: string
  liquidity: string
  volume7d: string
  fees7d: string
  apr: string
  actions?: string
  isFavorite?: boolean
}

export interface PoolableProps {
  data: IHeaderPool[]
  widthIcon?: number
  heightIcon?: number
  handleSwap: (path: string, pool: string) => void
  handleView: () => void
  handleAddLiquidity: (path: string, pool: string) => void
  handleTrash: () => void
  favoriteHandler?: () => void
  query?: string
}

const columns = [
  {
    key: 'pool',
    name: 'Pool',
    isSorteable: true
  },
  {
    key: 'liquidity',
    name: 'Liquidity',
    isSorteable: true
  },
  {
    key: 'volume7d',
    name: 'Volume 7D',
    isSorteable: true
  },
  {
    key: 'fees7d',
    name: 'Fees 7D',
    isSorteable: true
  },
  {
    key: 'apr',
    name: 'APR',
    isSorteable: true
  },
  {
    key: 'actions',
    name: 'Actions',
    isSorteable: false
  }
]

export const PoolTable = ({
  data,
  widthIcon = 30,
  heightIcon = 30,
  handleAddLiquidity,
  handleSwap,
  handleTrash,
  handleView,
  query = ''
}: PoolableProps) => {
  const [balanceData, setBalanceData] = useState<IHeaderPool[]>(data)
  const deviceType = useDeviceType()

  const isMobile = deviceType === DeviceType.MOBILE

  const handleSort = (key: string, isAscending: boolean) => {
    const sortedData = [...balanceData].sort((a, b) => {
      const sortMultiplier = isAscending ? 1 : -1
      const propA = a[key as keyof IHeaderPool]
      const propB = b[key as keyof IHeaderPool]

      if (propA !== undefined && propB !== undefined) {
        return propA > propB ? sortMultiplier : -sortMultiplier
      }

      return 0
    })
    setBalanceData(sortedData)
  }

  const favoriteHandler = (id: string) => {
    const updatedData = balanceData.map((row) => {
      if (row.pool === id) {
        return {
          ...row,
          isFavorite: !row.isFavorite
        }
      }
      return row
    })
    setBalanceData(updatedData)
  }

  const search = (query: string) => {
    console.log('query: ', query)
    if (query) {
      const newData = balanceData.filter((item) => {
        const values = Object.values(item)
        console.log('values: ', values)
        return values.some((value) => {
          console.log('value: ', value)
          return value.toString().toLowerCase().includes(query.toLowerCase())
        })
      })
      setBalanceData(newData)
    } else {
      setBalanceData(data)
    }
  }

  useEffect(() => {
    search(query)
  }, [query])

  return (
    <Wrapper isMobile={isMobile}>
      {!isMobile && <TableHeader columns={columns} onSort={handleSort} />}
      {balanceData.map((row) =>
        isMobile ? (
          <PoolItemMobile
            key={`pool-item-${row.pool}-mobile`}
            token0Icon={row.token0Icon}
            token1Icon={row.token1Icon}
            widthIcon={widthIcon}
            heightIcon={heightIcon}
            pool={row.pool}
            liquidity={row.liquidity}
            volume7d={row.volume7d}
            fees7d={row.fees7d}
            apr={row.apr}
            handleTrash={handleTrash}
            handleSwap={() => handleSwap('/swap', row.pool)}
            handleView={handleView}
            handleAddLiquidity={() =>
              handleAddLiquidity('/liquidity', row.pool)
            }
            favoriteHandler={() => favoriteHandler(row.pool)}
            isFavorite={row.isFavorite}
          />
        ) : (
          <PoolTableItem
            key={`pool-item-${row.pool}-desktop`}
            token0Icon={row.token0Icon}
            token1Icon={row.token1Icon}
            widthIcon={widthIcon}
            heightIcon={heightIcon}
            pool={row.pool}
            liquidity={row.liquidity}
            volume7d={row.volume7d}
            fees7d={row.fees7d}
            apr={row.apr}
            handleTrash={handleTrash}
            handleSwap={() => handleSwap('/swap', row.pool)}
            handleView={handleView}
            handleAddLiquidity={() =>
              handleAddLiquidity('/liquidity', row.pool)
            }
            favoriteHandler={() => favoriteHandler(row.pool)}
            isFavorite={row.isFavorite}
          />
        )
      )}
    </Wrapper>
  )
}
