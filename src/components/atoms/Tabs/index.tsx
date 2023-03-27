import React from 'react'
import { WrapperStyle, Tab, TabText } from './styles'

interface ITab {
  id: number;
  text: string
  isActive: boolean
}

interface ITabsProps {
  tabs: ITab[];
  onClick: (id: number) => void;
}

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
