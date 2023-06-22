import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BalanceTable } from '../../../src/components'

export default {
  title: 'Components/Molecules/BalanceTable',
  component: BalanceTable
} as ComponentMeta<typeof BalanceTable>

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof BalanceTable> = (args) => (
  // <div style={{ width: '2300px' }}>
    <BalanceTable {...args} />
  // </div>
)
export const Default = Template.bind({})
Default.args = {
  networkLink: 'https://testnet.cspr.live/contract-package/',
  data: [
    {
      id: 1,
      contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
      crypto: 'Casper',
      cryptoIcon:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      marketprice: 0.0,
      mybalance: 0.0,
      mycrypto: 0.0,
      '24h': -80.6,
      '7d': -10.0,
      '15d': 20.0,
      '30d': 10.0
    },
    {
      id: 2,
      contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
      crypto: 'CasperSwap',
      cryptoIcon:
        'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
      marketprice: 0.0,
      mybalance: 0.0,
      mycrypto: -5.0,
      '24h': -5.0,
      '7d': 5.0,
      '15d': -5.0,
      '30d': -90.0
    },
    {
      id: 3,
      contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
      crypto: 'Wrapped Bitcoin',
      cryptoIcon:
        'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
      marketprice: 0.0,
      mybalance: 0.0,
      mycrypto: 10.0,
      '24h': 10.0,
      '7d': 50.4,
      '15d': 50.3,
      '30d': -50.3
    },
    {
      id: 4,
      contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
      crypto: 'Wrapped Ether',
      cryptoIcon:
        'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
      marketprice: 0.0,
      mybalance: 0.0,
      mycrypto: 207,
      '24h': 207,
      '7d': 1.0,
      '15d': 0.0,
      '30d': -1.0
    },
    {
      id: 5,
      contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
      crypto: 'Debug Wrapped BTC',
      cryptoIcon:
        'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
      marketprice: 0.0,
      mybalance: 0.0,
      mycrypto: -180.6,
      '24h': -180.6,
      '7d': 0.0,
      '15d': 0.0,
      '30d': 0.0
    }
  ]
}
