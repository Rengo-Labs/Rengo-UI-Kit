import React, { useEffect, useRef, useState } from 'react'
import TableHeader from '../../atoms/TableHeader'
import { Body, Wrapper } from './styles'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'
import { AccountDeployBody, AccountTransferBody } from '../../atoms'
import { AccountTransferMobile } from '../AccountTransferMobile'

export interface ITransferHeader {
  id: string
  deploy_hash: string
  block_hash: string
  antiquity: string
  of: string
  for: string
  transference_id: string
  amount: number
  price: number
  handleCopy: () => void
}

export interface TransferTableProps {
  data: ITransferHeader[]
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
    key: 'of',
    name: 'Of',
    isSorteable: true
  },
  {
    key: 'for',
    name: 'For',
    isSorteable: true
  },
  {
    key: 'transference_id',
    name: 'Transference ID',
    isSorteable: true
  },
  {
    key: 'amount',
    name: 'Amount',
    isSorteable: true
  }
]

/**
 * Renders a table with the data of the transfer
 * @param {ITransferHeader[]} data - Data to be displayed in the table
 * @param {number} widthIcon - Width of the icon
 * @param {number} heightIcon - Height of the icon
 * @returns {JSX.Element} - Table with the data of the transfer
 */

export const AccountTransferTable = ({
  data,
  widthIcon,
  heightIcon
}: TransferTableProps) => {
  const [deployData, setDeployData] = useState<ITransferHeader[]>([])
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE
  const cryptoColumnRef = useRef<HTMLTableCellElement>(null)

  useEffect(() => {
    setDeployData(data)
  }, [data])

  const handleSort = (key: string, isAscending: boolean) => {
    const sortedData = [...deployData].sort((a, b) => {
      const sortMultiplier = isAscending ? 1 : -1
      return a[key as keyof ITransferHeader] > b[key as keyof ITransferHeader]
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
        />
      )}
      <Body>
        {deployData?.map((row) =>
          isMobile ? (
            <AccountTransferMobile
              deploy_hash={row.deploy_hash}
              block_hash={row.block_hash}
              antiquity={row.antiquity}
              of={row.of}
              forValue={row.for}
              transference_id={row.transference_id}
              amount={row.amount}
              price={row.price}
              widthIcon={widthIcon}
              heightIcon={heightIcon}
              key={`account-transfer-mobile-${row.id}`}
              handleCopy={row.handleCopy}
            />
          ) : (
            <AccountTransferBody
              deploy_hash={row.deploy_hash}
              block_hash={row.block_hash}
              antiquity={row.antiquity}
              of={row.of}
              forValue={row.for}
              transference_id={row.transference_id}
              amount={row.amount}
              price={row.price}
              widthIcon={widthIcon}
              heightIcon={heightIcon}
              key={`account-transfer-desktop-${row.id}`}
            />
          )
        )}
      </Body>
    </Wrapper>
  )
}
