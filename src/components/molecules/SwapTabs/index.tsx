import React, { useState } from 'react'
import { Column, Row, Tabs } from '../../atoms'
import { SwapPrice } from '../SwapPrice'
import { SwapMoreInfo } from '../SwapMoreInfo'
import { Item, TabContent } from './styles'
import { IToken } from '../LiquidityDetails'

export interface SwapTabsProps {
  firstTokenImg: any
  secondTokenImg: any
  firstSelectedToken: IToken
  secondSelectedToken: IToken
  gasFee: number
  slippageTolerance: number
}

/**
 * Render a Tabs.
 * @param {any} tokenImg - The image value to display in the img field.
 * @returns  {JSX.Element} The rendered two tabs, the first one with a Price component and the second one with the more info component.
 */

export const SwapTabs = ({
  firstTokenImg,
  secondTokenImg,
  firstSelectedToken,
  secondSelectedToken,
  gasFee,
  slippageTolerance
}: SwapTabsProps) => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      text: 'Price',
      isActive: true,
      component: (
        <SwapPrice
          firstTokenImg={firstTokenImg}
          secondTokenImg={secondTokenImg}
        />
      )
    },
    {
      id: 2,
      text: 'More Info',
      isActive: false,
      component: (
        <SwapMoreInfo
          firstSelectedToken={firstSelectedToken}
          secondSelectedToken={secondSelectedToken}
          gasFee={gasFee}
          slippageTolerance={slippageTolerance}
        />
      )
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
    <Column props={{ xs: 12 }}>
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
