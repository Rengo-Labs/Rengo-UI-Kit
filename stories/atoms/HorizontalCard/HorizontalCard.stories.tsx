import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HorizontalCard } from "../../../src/components";
import { HorizontalCardProps } from "../../../src/components/atoms/HorizontalMobileCard/types";
import ethToken from '../../assets/eth-token.svg'
import csprToken from '../../assets/cspr-token.svg'

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
  firstTokenIcon: csprToken,
  secondTokenIcon:ethToken,
  hasFavorite: false,
  tokenPairs: ['ETH', 'CSPR'],
  pairsLiquidity: [
    { name: 'Your Pooled (WCSPR)', value: '1543.804256310 WCSPR' },
    { name: 'Your Pooled (WETH)', value: '0.016286696 WETH' },
    { name: `Your Balance (WCSPR-CST)`, value: '217250.092919301' },
    { name: 'Your Share', value: '0.19%'},
    { name: 'Lp Stake', value: '200'}
  ],
  userPoolInfo: [{title: 'Total liquidity ($)', value: '$ 608K'}, {title: "Your Liquidity ($)", value: `$ 22`}],
  trashHandler: () => console.log('horizontal card: delete'),
  swapHandler: () => console.log('horizontal card: swap'),
  viewHandler: () => console.log('horizontal card: view'),
  stakeHandler: () => console.log('horizontal card: stake'),
  unstakeHandler: () => console.log('horizontal card: unstake'),
  claimHandler: () => console.log('horizontal card: claim'),
  addLiquidityHandler: () => console.log('horizontal card: add liquidity'),
  favoriteHandler: () => console.log('horizontal card: favorite'),
  rewardETHTitle: 'ETH',
  rewardCSTTitle: 'CST',
  hasLPBalance: true
};
