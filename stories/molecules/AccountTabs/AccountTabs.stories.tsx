import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AccountTabs } from '../../../src/components'

export default {
  title: 'Components/Molecules/AcountTabs',
  component: AccountTabs
} as ComponentMeta<typeof AccountTabs>

// Create a master template for mapping args to render the AccountTabs component
const Template: ComponentStory<typeof AccountTabs> = (args) => (
  <div style={{ width: '1100px' }}>
    <AccountTabs {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  deployData: [
    {
      id: 1,
      deploy_hash: '0da51...2191c',
      block_hash: 'cff58...3789d',
      antiquity: '3 days ago',
      contract: 'Wrapped Ether ERC-20',
      amount: '0.00003 WETH',
      cost: '2.29277 CSPR',
      price: '0.1025'
    },
    {
      id: 2,
      deploy_hash: '0da51...2191c',
      block_hash: 'cff58...3789d',
      antiquity: '3 days ago',
      contract: 'Wrapped Ether ERC-20',
      amount: '0.00003 WETH',
      cost: '2.29277 CSPR',
      price: '0.1025'
    },
    {
      id: 3,
      deploy_hash: '0da51...2191c',
      block_hash: 'cff58...3789d',
      antiquity: '3 days ago',
      contract: 'Wrapped Ether ERC-20',
      amount: '0.00003 WETH',
      cost: '3.29277 CSPR',
      price: '0.1025'
    },
  ],
  transferData: [
    {
      id: 1,
      deploy_hash: '0da51...2191c',
      block_hash: 'cff58...3789d',
      antiquity: '3 days ago',
      of: '012b3...7f525',
      for: '012b3...7f525',
      transference_id:'-',
      amount: '2.29277 CSPR',
      price: '0.1025'
    },
    {
      id: 2,
      deploy_hash: '0da51...2191c',
      block_hash: 'cff58...3789d',
      antiquity: '3 days ago',
      of: '012b3...7f525',
      for: '012b3...7f525',
      transference_id:'-',
      amount: '3.29277 CSPR',
      price: '0.1025'
    },
    {
      id: 3,
      deploy_hash: '0da51...2191c',
      block_hash: 'cff58...3789d',
      antiquity: '3 days ago',
      of: '012b3...7f525',
      for: '012b3...7f525',
      transference_id:'-',
      amount: '2.29277 CSPR',
      price: '0.1025'
    }
  ],
  widthIcon: 25,
  heightIcon: 25
}
