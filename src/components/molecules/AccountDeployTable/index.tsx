import React, { useEffect, useRef, useState } from 'react'
import TableHeader from '../../atoms/TableHeader'
import { Body, Wrapper } from './styles'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'
import { AccountDeployBody } from '../../atoms'
import { AccountDeployMobile } from '../AccountDeployMobile'

export interface IDeployHeader {
  id: string
  deploy_hash: string
  block_hash: string
  antiquity: string
  contract: string
  contractRedirect: () => void
  handleCopy: () => void
  entry_point: string
  amount: number
  amountSymbol: string
  cost: number
  price: number
  errorMessage: string
}

export interface DeployTableProps {
  data: IDeployHeader[]
  widthIcon?: number
  heightIcon?: number
}

const columns = [
  {
    key: 'deploy_hash',
    name: 'Deploy Hash',
    isSorteable: true
  },
  {
    key: 'block_hash',
    name: 'Block Hash',
    isSorteable: true
  },
  {
    key: 'antiquity',
    name: 'Antiquity',
    isSorteable: true
  },
  {
    key: 'contract',
    name: 'Contract',
    isSorteable: true
  },
  {
    key: 'amount',
    name: 'Amount',
    isSorteable: true
  },
  {
    key: 'cost',
    name: 'Cost',
    isSorteable: true
  }
]

/**
 * Renders a table with the data of the deploy
 * @param {IDeployHeader[]} data - Data to be displayed in the table
 * @param {number} widthIcon - Width of the icon
 * @param {number} heightIcon - Height of the icon
 * @returns {JSX.Element} - Table with the data of the deploy
 */

export const AccountDeployTable = ({
  data,
  widthIcon,
  heightIcon
}: DeployTableProps) => {
  const [deployData, setDeployData] = useState<IDeployHeader[]>([])
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE
  const cryptoColumnRef = useRef<HTMLTableCellElement>(null)
  const cryptoColumnWidth = cryptoColumnRef.current?.clientWidth || 0

  useEffect(() => {
    setDeployData(data)
  }, [data])

  const handleSort = (key: string, isAscending: boolean) => {
    const sortedData = [...deployData].sort((a, b) => {
      const sortMultiplier = isAscending ? 1 : -1
      return a[key as keyof IDeployHeader] > b[key as keyof IDeployHeader]
        ? sortMultiplier
        : -sortMultiplier
    })
    setDeployData(sortedData)
  }

  return (
    <Wrapper isMobile={isMobile}>
      {!isMobile && (
        <TableHeader
          columns={columns}
          onSort={handleSort}
          cryptoColumnRef={cryptoColumnRef}
        />
      )}
      <Body>
        {deployData?.map((row: IDeployHeader) =>
          isMobile ? (
            <AccountDeployMobile
              deploy_hash={row.deploy_hash}
              block_hash={row.block_hash}
              antiquity={row.antiquity}
              contract={row.contract}
              contractRedirect={row.contractRedirect}
              entry_point={row.entry_point}
              amount={row.amount}
              amountSymbol={row.amountSymbol}
              cost={row.cost}
              price={row.price}
              widthIcon={widthIcon}
              heightIcon={heightIcon}
              key={`account-deploy-mobile-${row.id}`}
              handleCopy={row.handleCopy}
              errorMessage={row.errorMessage}
            />
          ) : (
            <AccountDeployBody
              deploy_hash={row.deploy_hash}
              block_hash={row.block_hash}
              antiquity={row.antiquity}
              contract={row.contract}
              contractRedirect={row.contractRedirect}
              entry_point={row.entry_point}
              amount={row.amount}
              amountSymbol={row.amountSymbol}
              cost={row.cost}
              price={row.price}
              widthIcon={widthIcon}
              heightIcon={heightIcon}
              key={`account-deploy-desktop-${row.id}`}
              errorMessage={row.errorMessage}
            />
          )
        )}
      </Body>
    </Wrapper>
  )
}
