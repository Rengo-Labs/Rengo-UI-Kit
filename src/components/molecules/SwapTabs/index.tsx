import React, { useState } from 'react'
import { Column, Row, Tabs } from '../../atoms'
import { SwapPrice } from '../SwapPrice'
import { SwapMoreInfo } from '../SwapMoreInfo'
import { Item, TabContent } from './styles'

interface SwapTabsProps {
  tokenImg: any
}

export const SwapTabs = ({ tokenImg }: SwapTabsProps) => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      text: 'Price',
      isActive: true,
      component: <SwapPrice tokenImg={tokenImg}/>
    },
    {
      id: 2,
      text: 'More Info',
      isActive: false,
      component: <SwapMoreInfo />
    }
  ])

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
    <Column props={{ xs: 12, md: 6}}>
      <Row>
        <Tabs tabs={tabs} onClick={handleTabClick} />
      </Row>
      <TabContent>
        {tabs.map((tab) => {
          if (tab.isActive) {
            return <Item key={tab.id}>{tab.component}</Item>
          }
        })}
      </TabContent>
    </Column>
  )
}
