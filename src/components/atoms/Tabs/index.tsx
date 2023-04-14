import React from 'react'
import { WrapperStyle, Tab, TabText } from './styles'

interface ITab {
  id: number;
  text: string
  isActive: boolean
}

export interface ITabsProps {
  tabs: ITab[];
  onClick: (id: number) => void;
}

/**
 * Render a tabs navigaton.
 * @param {ITab} tabs - The tabs to display.
 * @param {function} onClick - The function to call when the tab is clicked.
 */

export const Tabs = ({ tabs, onClick }: ITabsProps) => {
  return (
    <WrapperStyle>
      {tabs.map((tab) => {
        return (
          <Tab onClick={() => onClick(tab.id)} key={`${tab.id}-${tab.text}`} isActive={tab.isActive}>
            <TabText isActive={tab.isActive}>{tab.text}</TabText>
          </Tab>
        )
      })}
    </WrapperStyle>
  )
}
