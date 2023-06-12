import React, { useEffect, useRef, useState } from 'react'
import TableHeader from '../../atoms/TableHeader'
import { Body, Wrapper } from './styles'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'
import { PoolItemMobile, PoolTableItem } from '../../atoms'

export interface IHeaderPool {
  contractPackage: string
  name: string
  pool: string
  token0Icon: string
  token1Icon: string
  yourLiquidity: string
  volume7d: string
  fees7d: string
  assetsPoolToken0: string
  assetsPoolToken1: string
  yourShare: string
  apr: string
  actions?: string
  isFavorite?: boolean
  balance: string
}

export interface PoolTableProps {
  networkLink: string
  data: IHeaderPool[]
  widthIcon?: number
  heightIcon?: number
  handleSwap: (path: string, pool: string) => void
  handleView: (name: string) => void
  handleAddLiquidity: (path: string, pool: string) => void
  handleTrash: (name: string) => void
  handleFavorite: (name: string) => void
  query?: string
  showStakedOnly?: boolean
}

const columns = [
  {
    key: 'pool',
    name: 'Pool',
    isSorteable: true,
    width: '30%'
  },
  {
    key: 'yourLiquidity',
    name: 'Liquidity',
    isSorteable: true,
  },
  {
    key: 'assetsPoolToken0',
    name: 'Asset 1',
    isSorteable: true,
  },
  {
    key: 'assetsPoolToken1',
    name: 'Asset 2',
    isSorteable: true,
  },
  {
    key: 'volume7d',
    name: 'Volume 7D',
    isSorteable: true,
  },
  {
    key: 'fees7d',
    name: 'Fees 7D',
    isSorteable: true,
  },
  {
    key: 'yourShare',
    name: 'Your Share',
    isSorteable: true,
  },
  {
    key: 'apr',
    name: 'APR',
    isSorteable: true,
  },
  {
    key: 'actions',
    name: 'Actions',
    isSorteable: false,
  }
]

const NOT_SEARCHABLE_KEYS = ['token1Icon', 'token0Icon']

export const PoolTable = ({
  networkLink,
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
  const [balanceData, setBalanceData] = useState<IHeaderPool[]>()
  const [actionsDialogActive, setActionsDialogActive] = useState<string | null>()
  const cryptoColumnRef = useRef<HTMLTableCellElement>(null)
  const deviceType = useDeviceType()
  const tableRef = useRef<HTMLTableElement>(null);
  const isMobile = deviceType === DeviceType.MOBILE

  useEffect(() => {
    const initialSortedData = handleSort('pool', true, data)
    setBalanceData(initialSortedData)
    
  }, [data])

  const toggleDialog = (name: string) => {
    setActionsDialogActive((prev) => (prev === name ? null : name))
  }

  const handleSort = (key: string, isAscending: boolean, initialSort?: IHeaderPool[]) => {
    const EXCLUDED_KEYS =['yourShare', 'actions', 'pool']
    const originalData = initialSort && initialSort?.length > 0 ? initialSort : balanceData
    
    const sortedData = originalData?.sort((a, b) => {
      if (a.isFavorite && !b.isFavorite) {
        return -1
      }
    
      if (!a.isFavorite && b.isFavorite) {
        return 1
      }
    
      const sortMultiplier = isAscending ? 1 : -1


      const propA = !EXCLUDED_KEYS.includes(key)
      ? parseFloat((a as any)[key].replace(/[$,]/g, ''))
      : (a as any)[key as keyof IHeaderPool]
    
    
      const propB = !EXCLUDED_KEYS.includes(key)
        ? parseFloat((b as any)[key].replace(/[$,]/g, ''))
        : (b as any)[key as keyof IHeaderPool]
    
      if (propA !== undefined && propB !== undefined) {
        return (propA > propB ? sortMultiplier : -sortMultiplier)
      }
    
      return 0
    });

    
    if (initialSort && initialSort?.length > 0) {
      return sortedData
    } else {
      setBalanceData(sortedData)
    }
  }

  const favoriteHandler = (name: string) => {
    const updatedData = balanceData?.map((row) => {
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
    <Wrapper isMobile={isMobile} ref={tableRef}>
      {!isMobile && <TableHeader columns={columns} onSort={handleSort} />}
      <Body isMobile={isMobile}>

        {balanceData && balanceData?.length > 0 ? (
          balanceData?.map((row, i) =>
            isMobile ? (
              <PoolItemMobile
                networkLink={networkLink}
                contractPackage={row.contractPackage}
                key={`pool-item-${row.pool}-mobile`}
                token0Icon={row.token0Icon}
                token1Icon={row.token1Icon}
                widthIcon={widthIcon}
                heightIcon={heightIcon}
                pool={row.pool}
                yourLiquidity={row.yourLiquidity}
                volume7d={row.volume7d}
                fees7d={row.fees7d}
                assetsPoolToken0={row.assetsPoolToken0}
                assetsPoolToken1={row.assetsPoolToken1}
                yourShare={row.yourShare}
                apr={row.apr}
                handleTrash={() => handleTrash(row.name)}
                handleSwap={() => handleSwap('/swap', row.pool)}
                handleView={() => handleView(row.name)}
                handleAddLiquidity={() =>
                  handleAddLiquidity('/liquidity', row.pool)
                }
                favoriteHandler={() => favoriteHandler(row.name)}
                isFavorite={row.isFavorite}
                toggleDialog={() => toggleDialog(row.name)}
                actionsDialogActive={actionsDialogActive === row.name}
                hideRemoveLiquidity={Number(row.balance) >= 0}
              />
            ) : (
              <PoolTableItem
                networkLink={networkLink}
                contractPackage={row.contractPackage}
                key={`pool-item-${row.pool}-desktop`}
                token0Icon={row.token0Icon}
                token1Icon={row.token1Icon}
                widthIcon={widthIcon}
                heightIcon={heightIcon}
                pool={row.pool}
                yourLiquidity={row.yourLiquidity}
                volume7d={row.volume7d}
                fees7d={row.fees7d}
                assetsPoolToken0={row.assetsPoolToken0}
                assetsPoolToken1={row.assetsPoolToken1}
                yourShare={row.yourShare}
                apr={row.apr}
                handleTrash={() => handleTrash(row.name)}
                handleSwap={() => handleSwap('/swap', row.pool)}
                handleView={() => handleView(row.name)}
                handleAddLiquidity={() =>
                  handleAddLiquidity('/liquidity', row.pool)
                }
                favoriteHandler={() => favoriteHandler(row.name)}
                isFavorite={row.isFavorite}
                toggleDialog={() => toggleDialog(row.name)}
                actionsDialogActive={actionsDialogActive === row.name}
                hideRemoveLiquidity={Number(row.balance) === 0}
              />
            )
        )) : null}
      </Body>

    </Wrapper>
  )
}
