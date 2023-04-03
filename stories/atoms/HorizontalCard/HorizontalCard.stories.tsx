import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HorizontalCard } from "../../../src/components";
import { HorizontalCardProps } from "../../../src/components/atoms/HorizontalCard/types";
// @ts-ignore
import ethCsprPair from '../../../example/src/assets/eth-cspr-pair.svg'

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
  icon: ethCsprPair,
  hasFavorite: true,
  tokenPairs: ['ETH', 'CSPR'],
    pairsLiquidity: [
      { name: 'Pooled (WCSPR)', value: '1543.804256310 WCSPR' },
      { name: 'Pooled (WETH)', value: '0.016286696 WETH' }
  ],
  userPoolInfo: ['5.00100931 LP', '0.19%'],
  trashHandler: () => console.log('horizontal card: delete'),
  swapHandler: () => console.log('horizontal card: swap'),
  viewHandler: () => console.log('horizontal card: view'),
  addLiquidityHandler: () => console.log('horizontal card: add liquidity'),
  favoriteHandler: () => console.log('horizontal card: favorite')
};
