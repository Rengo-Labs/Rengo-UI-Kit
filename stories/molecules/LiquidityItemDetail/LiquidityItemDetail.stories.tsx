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
const data = [
    {
        name: '01/23',
        eth: 867,
        cspr: 1245
    },
    {
        name: '02/23',
        eth: 1000,
        cspr: 1398
    },
    {
        name: '03/23',
        eth: 1010,
        cspr: 1410
    },
    {
        name: '04/23',
        eth: 1345,
        cspr: 2035
    },
    {
        name: '05/23',
        eth: 867,
        cspr: 1980
    },
    {
        name: '06/23',
        eth: 950,
        cspr: 2010
    },
    {
        name: '07/23',
        eth: 650,
        cspr: 2670
    }
]
export const Default = Template.bind({})
Default.args = {
    isOpen: true,
    closeCallback : () => console.log('dialog is closed'),
    chartData: data,
    chart0Name: 'eth',
    xAxisName: 'name'
}
