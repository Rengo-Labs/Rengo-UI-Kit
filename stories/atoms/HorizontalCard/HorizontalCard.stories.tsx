import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HorizontalCard } from "../../../src/components";
import { HorizontalCardProps } from "../../../src/components/atoms/HorizontalMobileCard/types";
import ethCsprPair from '../../assets/eth-cspr-pair.svg'

export default {
  title: "Components/Atoms/HorizontalCard",
  component: HorizontalCard,
} as ComponentMeta<typeof HorizontalCard>;

// Create a master template for mapping args to render the HorizontalCard component
const Template: ComponentStory<typeof HorizontalCard> = (args: HorizontalCardProps) => {
  return (
    <HorizontalCard {...args} />
  )
};
export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  networkLink: 'https://testnet.cspr.live/contract-package/',
  contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
  icon: ethCsprPair,
  hasFavorite: true,
  tokenPairs: ['ETH', 'CSPR'],
    pairsLiquidity: [
      { name: 'Pooled (WCSPR)', value: '1543.804256310 WCSPR' },
      { name: 'Pooled (WETH)', value: '0.016286696 WETH' }
  ],
  userPoolInfo: [{title: 'Your Liquidity', value: '5.00100931 LP'}, {title: 'Your Share', value: '0.19%'}],
  trashHandler: () => console.log('horizontal card: delete'),
  swapHandler: () => console.log('horizontal card: swap'),
  viewHandler: () => console.log('horizontal card: view'),
  addLiquidityHandler: () => console.log('horizontal card: add liquidity'),
  favoriteHandler: () => console.log('horizontal card: favorite')
};
