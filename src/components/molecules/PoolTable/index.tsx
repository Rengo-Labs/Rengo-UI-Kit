import React, { useEffect, useState } from 'react'
import TableHeader from '../../atoms/TableHeader'
import { Wrapper } from './styles'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'
import { PoolItemMobile, PoolTableItem } from '../../atoms'

export interface IHeaderPool {
  name: string
  pool: string
  token0Icon: string
  token1Icon: string
  liquidity: string
  volume7d: string
  fees7d: string
  apr: string
  actions?: string
  isFavorite?: boolean
  balance: string
}

export interface PoolTableProps {
  data: IHeaderPool[]
  widthIcon?: number
  heightIcon?: number
  handleSwap: (path: string, pool: string) => void
  handleView: (name: string) => void
  handleAddLiquidity: (path: string, pool: string) => void
  handleTrash: () => void
  handleFavorite: (name: string) => void
  query?: string
  showStakedOnly?: boolean
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

const NOT_SEARCHABLE_KEYS = ['token1Icon', 'token0Icon']

export const PoolTable = ({
  data,
  widthIcon = 30,
  heightIcon = 30,
  handleAddLiquidity,
  handleSwap,
  handleTrash,
  handleView,
  handleFavorite,
  query = '',
  showStakedOnly
}: PoolTableProps) => {
  const [balanceData, setBalanceData] = useState<IHeaderPool[]>(() => data)
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

  const favoriteHandler = (name: string) => {
    const updatedData = balanceData.map((row) => {
      if (row.name === name) {
        return {
          ...row,
          isFavorite: !row.isFavorite
        }
      }
      return row
    })
    setBalanceData(updatedData)
    handleFavorite(name)
  }

  const excludeKeys = (targetObj: IHeaderPool, keys: string[]) => {
    const newObj = { ...targetObj };
  
    keys.forEach((item: string) => {
      delete newObj[item as keyof IHeaderPool];
    });
  
    return newObj;
  };
  
  const search = (query: string) => {
    if (query) {
      const newData = data.filter(item => {
        const newObj = excludeKeys(item, NOT_SEARCHABLE_KEYS)
        const valuesArr = Object.values(newObj)
        
        const exists = valuesArr.some((item) => {
          if (typeof item !== "string") {
            return false
          }

          return item.toLowerCase().includes(query.toLowerCase());
        });
        
        if (exists) {
          return item
        } 
      })

      return newData
    } else {
      return data
    }
  }

  const getStakedData = () => {
    return data.filter(item => {
      if (parseFloat(item.balance) > 0) {
        return item
      }
    })
  }

  useEffect(() => {
    const newBalanceData = search(query)
    setBalanceData(newBalanceData)
  }, [query])

  useEffect(() => {
    if (showStakedOnly) {
      const newData = getStakedData()
      setBalanceData(newData)
    } else {
      setBalanceData(data)
    }

  }, [showStakedOnly])
  

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
            handleView={() => handleView(row.name)}
            handleAddLiquidity={() =>
              handleAddLiquidity('/liquidity', row.pool)
            }
            favoriteHandler={() => favoriteHandler(row.name)}
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
            handleView={() => handleView(row.name)}
            handleAddLiquidity={() =>
              handleAddLiquidity('/liquidity', row.pool)
            }
            favoriteHandler={() => favoriteHandler(row.name)}
            isFavorite={row.isFavorite}
          />
        )
      )}
    </Wrapper>
  )
}
