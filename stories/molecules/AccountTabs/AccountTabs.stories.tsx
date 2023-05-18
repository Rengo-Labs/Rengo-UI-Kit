import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AccountTabs } from '../../../src/components'

export default {
  title: 'Components/Molecules/AcountTabs',
  component: AccountTabs
} as ComponentMeta<typeof AccountTabs>

// Create a master template for mapping args to render the AccountTabs component
const Template: ComponentStory<typeof AccountTabs> = (args) => (
  <div style={{ width: '1150px' }}>
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
      contract: 'Wrapped Ether',
      entry_point: 'increase_allowance',
      amount: 0.00003,
      amountSymbol: 'WETH',
      cost: 2.29277,
      price: 3.1025,
      errorMessage: ''
    },
    {
      id: 2,
      deploy_hash: '0da51...2191c',
      block_hash: 'cff58...3789d',
      antiquity: '3 days ago',
      contract: 'Wrapped Ether',
      entry_point: 'increase_allowance',
      amount: 4.00003,
      amountSymbol: 'WETH',
      cost: -3.29277,
      price: 1.1025,
      errorMessage: 'Error'
    },
    {
      id: 3,
      deploy_hash: '0da51...2191c',
      block_hash: 'cff58...3789d',
      antiquity: '3 days ago',
      contract: 'Wrapped Ether',
      entry_point: 'increase_allowance',
      amount: -0.00003,
      amountSymbol: 'WETH',
      cost: -2.29277,
      price: 2.1025,
      errorMessage: ''
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
      amount: 2.29277,
      price: 0.1025
    },
    {
      id: 2,
      deploy_hash: '0da51...2191c',
      block_hash: 'cff58...3789d',
      antiquity: '3 days ago',
      of: '012b3...7f525',
      for: '012b3...7f525',
      transference_id:'-',
      amount: 4.29277,
      price: 0.1025
    },
    {
      id: 3,
      deploy_hash: '0da51...2191c',
      block_hash: 'cff58...3789d',
      antiquity: '3 days ago',
      of: '012b3...7f525',
      for: '012b3...7f525',
      transference_id:'-',
      amount: -2.29277,
      price: 0.1025
    }
  ],
  widthIcon: 25,
  heightIcon: 25
}
