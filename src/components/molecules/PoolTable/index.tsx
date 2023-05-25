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
  liquidity: number
  volume7d: number
  fees7d: number
  assetsPoolToken0: string
  assetsPoolToken1: string
  yourShare: string
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
    // width: '250px'
    width: '30%'
  },
  {
    key: 'liquidity',
    name: 'Liquidity',
    isSorteable: true,
    // width: '100px'
  },
  {
    key: 'assetsPoolToken0',
    name: 'Asset 1',
    isSorteable: true,
    // width: '150px'
  },
  {
    key: 'assetsPoolToken1',
    name: 'Asset 2',
    isSorteable: true,
    // width: '150px'
  },
  {
    key: 'volume7d',
    name: 'Volume 7D',
    isSorteable: true,
    // width: '150px'
  },
  {
    key: 'fees7d',
    name: 'Fees 7D',
    isSorteable: true,
    // width: '120px'
  },
  {
    key: 'yourShare',
    name: 'Your Share',
    isSorteable: true,
    // width: '120px'
  },
  {
    key: 'actions',
    name: 'Actions',
    isSorteable: false,
    // width: '80px'
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
  const [balanceData, setBalanceData] = useState<IHeaderPool[]>(() => data)
  const deviceType = useDeviceType()
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    setBalanceData(data)
  }, [data])

  const isMobile = deviceType === DeviceType.MOBILE

  const [actionsDialogActive, setActionsDialogActive] = useState<string | null>()
  const cryptoColumnRef = useRef<HTMLTableCellElement>(null)

  const toggleDialog = (name: string) => {
    setActionsDialogActive((prev) => (prev === name ? null : name))
  }


  const handleSort = (key: string, isAscending: boolean) => {
    
    const sortedData = [...balanceData].sort((a, b) => {
      const sortMultiplier = isAscending ? 1 : -1

      const propA = key === 'assetsPoolToken0' || key === 'assetsPoolToken1' ?
                                  parseFloat(a[key].replace(/[a-zA-Z]/g, '')) :
                                  a[key as keyof IHeaderPool]

      const propB = key === 'assetsPoolToken0' || key === 'assetsPoolToken1' ?
                                  parseFloat(b[key].replace(/[a-zA-Z]/g, '')) :
                                  b[key as keyof IHeaderPool]



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




  // useEffect(() => {
  //   const table = tableRef.current;
  //   if (table) {
  //     const thElements = Array.from(table.getElementsByTagName('th'));

  //     for (let i = 0; i < thElements.length; i++) {
  //       const th = thElements[i];
  //       const tdElements = Array.from(table.querySelectorAll(`tbody tr td:nth-child(${i + 1})`)) as HTMLElement[];
  //       tdElements.forEach((td) => {
  //         td.style.width = `${th.offsetWidth}px`;
  //       });
  //     }
  //   }
  // }, [deviceType]);

  return (
    <Wrapper isMobile={isMobile} ref={tableRef}>
      {!isMobile && <TableHeader columns={columns} onSort={handleSort} firstColumnRef={cryptoColumnRef} />}
      <Body isMobile={isMobile}>

        {balanceData.map((row, i) =>
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
              liquidity={row.liquidity}
              volume7d={row.volume7d}
              fees7d={row.fees7d}
              assetsPoolToken0={row.assetsPoolToken0}
              assetsPoolToken1={row.assetsPoolToken1}
              yourShare={row.yourShare}
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
              liquidity={row.liquidity}
              volume7d={row.volume7d}
              fees7d={row.fees7d}
              assetsPoolToken0={row.assetsPoolToken0}
              assetsPoolToken1={row.assetsPoolToken1}
              yourShare={row.yourShare}
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
        )}
      </Body>

    </Wrapper>
  )
}
