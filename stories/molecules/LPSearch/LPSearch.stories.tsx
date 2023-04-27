import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LPSearch, LPSearchProps } from '../../../src/components'


export default {
  title: 'Components/Molecules/LPSearch',
  component: LPSearch
} as ComponentMeta<typeof LPSearch>

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof LPSearch> = (args: LPSearchProps) => (
  <div style={{ width: '100vw' }}>
    <LPSearch {...args} />
  </div>
)
export const Default = Template.bind({})

Default.args = {
  handleOnlyShowStaked: (e) => console.log('LPSearch', e),
};