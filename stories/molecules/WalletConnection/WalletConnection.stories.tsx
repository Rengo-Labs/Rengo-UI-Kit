import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { WalletConnection } from '../../../src/components'
import { WALLETS_DATA } from '../../../example/src/data'

export default {
  title: 'Components/Molecules/WalletConnection',
  component: WalletConnection
} as ComponentMeta<typeof WalletConnection>

// Create a master template for mapping args to render the WalletConnection component
const Template: ComponentStory<typeof WalletConnection> = () => (
  <div style={{ width: '600px' }}>
    <WalletConnection
      closeCallback={() => console.log('close')}
      wallets={WALLETS_DATA}
      isOpen={true}
    />
  </div>
)
export const Default = Template.bind({})
