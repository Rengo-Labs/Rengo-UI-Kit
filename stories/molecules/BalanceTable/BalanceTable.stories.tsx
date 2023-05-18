import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BalanceTable } from '../../../src/components'

export default {
  title: 'Components/Molecules/BalanceTable',
  component: BalanceTable
} as ComponentMeta<typeof BalanceTable>

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof BalanceTable> = (args) => (
  <div style={{ width: '900px' }}>
    <BalanceTable {...args} />
  </div>
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
      mycrypto: 0.0,
      '24h': '0.00%',
      '7d': '0.00%',
      '15d': '0.00%',
      '30d': '0.00%'
    },
    {
      id: 2,
      contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
      crypto: 'CasperSwap',
      cryptoIcon:
        'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
      mycrypto: 0.0,
      '24h': '0.00%',
      '7d': '0.00%',
      '15d': '0.00%',
      '30d': '0.00%'
    },
    {
      id: 3,
      contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
      crypto: 'Wrapped Bitcoin',
      cryptoIcon:
        'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
      mycrypto: 0.0,
      '24h': '0.00%',
      '7d': '0.00%',
      '15d': '0.00%',
      '30d': '0.00%'
    },
    {
      id: 4,
      contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
      crypto: 'Wrapped Ether',
      cryptoIcon:
        'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
      mycrypto: 0.0,
      '24h': '0.00%',
      '7d': '0.00%',
      '15d': '0.00%',
      '30d': '0.00%'
    },
    {
      id: 5,
      contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
      crypto: 'Debug Wrapped BTC',
      cryptoIcon:
        'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
      mycrypto: 0.0,
      '24h': '0.00%',
      '7d': '0.00%',
      '15d': '0.00%',
      '30d': '0.00%'
    }
  ]
}
