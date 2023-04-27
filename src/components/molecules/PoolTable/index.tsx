import React, { useState } from 'react'
import TableHeader from '../../atoms/TableHeader'
import { Wrapper } from './styles'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'
import { PoolItemMobile, PoolTableItem } from '../../atoms'

export interface IHeaderPool {
  id: number
  pool: string
  token1Icon: any
  token2Icon: any
  liquidity: string
  volumen7d: string
  fees7d: string
  apr: string
  actions: string
  isFavorite?: boolean
}

export interface PoolableProps {
  data: IHeaderPool[]
  widthIcon?: number
  heightIcon?: number
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
    key: 'volumen7d',
    name: 'Volumen 7D',
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

export const PoolTable = ({ data, widthIcon = 35, heightIcon = 35 }: PoolableProps) => {
  const [balanceData, setBalanceData] = useState<IHeaderPool[]>(data)
  const deviceType = useDeviceType()

  const isMobile = deviceType === DeviceType.MOBILE

  const handleSort = (key: string, isAscending: boolean) => {
    const sortedData = [...balanceData].sort((a, b) => {
      const sortMultiplier = isAscending ? 1 : -1
      return a[key as keyof IHeaderPool] > b[key as keyof IHeaderPool]
        ? sortMultiplier
        : -sortMultiplier
    })
    setBalanceData(sortedData)
  }

  const handleDelete = (id: number) => {
    const filteredData = balanceData.filter((row) => row.id !== id)
    setBalanceData(filteredData)
  }

  const favoriteHandler = (id: number) => {
    const updatedData = balanceData.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          isFavorite: !row.isFavorite
        }
      }
      return row
    })
    setBalanceData(updatedData)
  }

  return (
    <Wrapper isMobile={isMobile}>
      {!isMobile && <TableHeader columns={columns} onSort={handleSort} />}
      {balanceData.map((row) =>
        isMobile ? (
          <PoolItemMobile
            key={row.id}
            token1Icon={row.token1Icon}
            token2Icon={row.token2Icon}
            widthIcon={widthIcon}
            heightIcon={heightIcon}
            pool={row.pool}
            liquidity={row.liquidity}
            volumen7d={row.volumen7d}
            fees7d={row.fees7d}
            apr={row.apr}
            handleTrash={() => handleDelete(row.id)}
            handleSwap={() => console.log('swap')}
            handleView={() => console.log('view')}
            handleAddLiquidity={() => console.log('add liquidity')}
            favoriteHandler={() => favoriteHandler(row.id)}
            isFavorite={row.isFavorite}
          />
        ) : (
          <PoolTableItem
            key={row.id}
            token1Icon={row.token1Icon}
            token2Icon={row.token2Icon}
            widthIcon={widthIcon}
            heightIcon={heightIcon}
            pool={row.pool}
            liquidity={row.liquidity}
            volumen7d={row.volumen7d}
            fees7d={row.fees7d}
            apr={row.apr}
            handleTrash={() => handleDelete(row.id)}
            handleSwap={() => console.log('swap')}
            handleView={() => console.log('view')}
            handleAddLiquidity={() => console.log('add liquidity')}
            favoriteHandler={() => favoriteHandler(row.id)}
            isFavorite={row.isFavorite}
          />
        )
      )}
    </Wrapper>
  )
}
