import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PoolItemDetails } from '../../../src/components'
export default {
  title: 'Components/Molecules/PoolItemDetails',
  component: PoolItemDetails
} as ComponentMeta<typeof PoolItemDetails>

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof PoolItemDetails> = (args) => (
  <div style={{ width: '500px' }}>
    <PoolItemDetails {...args} />
  </div>
)
export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  closeCallback: () => console.log('PoolItemDetails'),
  token0Icon:
    'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  token1Icon:
    'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
  token0Symbol: 'BTC',
  token1Symbol: 'ETH',
  isFavorite: true,
  handleFavorite: () => console.log('handleFavorite'),
  widthIcon: 45,
  heightIcon: 45,
  yourLiquidityTokens: '228.521956293 WCSPR-CST',
  assetsPooled: {
    asset0: '1055.512409755 BTC',
    asset1: '48.456722835 ETH'
  },
  yourShare: '2,12',
  yourLiquidity: '$607,636.83',
  volume7D: '$4,653,213',
  fees7D: '$4,653,213',
  yourStaked: '323.03232',
  stakedPercentage: '23.22 %',
  yourAPR: '22.22 %'
}
