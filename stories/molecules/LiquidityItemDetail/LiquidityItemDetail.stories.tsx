import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LiquidityItemDetail } from '../../../src/components'

export default {
  title: 'Components/Molecules/LiquidityItemDetail',
  component: LiquidityItemDetail
} as ComponentMeta<typeof LiquidityItemDetail>

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof LiquidityItemDetail> = (args) => (
  <div style={{ width: '500px' }}>
    <LiquidityItemDetail {...args} />
  </div>
)
export const Default = Template.bind({})
Default.args = {
    isOpen: true,
    closeCallback : () => console.log('dialog is closed')
}
