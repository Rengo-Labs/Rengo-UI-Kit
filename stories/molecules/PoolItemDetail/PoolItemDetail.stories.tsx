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
  yourLiquidity: '0.00000000',
  assetsPooled: {
    asset0: '00 BTC',
    asset1: '00 ETH'
  },
  yourShare: '2.123456789',
  liqudiity: '0.00000000',
  volume7D: '0.00000000',
  fees7D: '0.00000000',
  apr: '0.00%'
}
