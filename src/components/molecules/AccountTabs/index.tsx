import React, { useLayoutEffect, useState } from 'react'
import { Column, Row, Tabs } from '../../atoms'
import { Item, TabContent } from './styles'
import { AccountDeployTable, IDeployHeader } from '../AccountDeployTable'
import { AccountTransferTable, ITransferHeader } from '../AccountTransferTable'

export interface AccountTabsProps {
  tabDefault?: number
  deployData: IDeployHeader[]
  transferData: ITransferHeader[]
  widthIcon?: number
  heightIcon?: number
}

/**
 * Render a Tabs.
 * @param {any} tabDefault - The default tab to show.
 * @param {IDeployHeader[]} deployData - The data to show in the deploy table.
 * @param {ITransferHeader[]} transferData - The data to show in the transfer table.
 * @param {number} widthIcon - The width of the icon.
 * @param {number} heightIcon - The height of the icon.
 * @returns  {JSX.Element} The rendered two tabs, the first one with a deploy table and the second one with a transfer table.
 */

export const AccountTabs = ({
  tabDefault = 1,
  deployData,
  transferData,
  widthIcon = 30,
  heightIcon = 30
}: AccountTabsProps) => {

  const deployTable = (
    <AccountDeployTable
      data={deployData}
      widthIcon={widthIcon}
      heightIcon={heightIcon}
    />
  )
  const transferTable = (
    <AccountTransferTable
      data={transferData}
      widthIcon={widthIcon}
      heightIcon={heightIcon}
    />
  )

  const tabsElement = [
    {
      id: 1,
      text: 'Deploy',
      isActive: tabDefault === 1,
      component: deployTable
    },
    {
      id: 2,
      text: 'Transfer',
      isActive: tabDefault === 2,
      component: transferTable
    }
  ]

  const [tabs, setTabs] = useState(tabsElement)

  useLayoutEffect(() => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        component: tab.id === 1 ? deployTable : transferTable
      }))
    )
  }, [])

  const handleTabClick = (id: number) => {
    const newTabs = tabs.map((tab) => {
      if (tab.id === id) {
        return {
          ...tab,
          isActive: true
        }
      } else {
        return {
          ...tab,
          isActive: false
        }
      }
    })

    setTabs(newTabs)
  }

  return (
    <Column
      props={{
        xs: 12,
        id: 'account-tabs'
      }}
    >
      <Row>
        <Tabs tabs={tabs} onClick={handleTabClick} />
      </Row>
      <TabContent>
        {tabs.map((tab, index) => {
          if (tab.isActive) {
            return <Item key={tab.id}>{tab.component}</Item>
          }
        })}
      </TabContent>
    </Column>
  )
}
