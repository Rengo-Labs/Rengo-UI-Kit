import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {PoolTable} from "../../../src/components";
import { BALANCE_TABLE_DATA } from '../../../example/src/data';

export default {
    title: "Components/Molecules/PoolTable",
    component: PoolTable,
} as ComponentMeta<typeof PoolTable>;

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof PoolTable> = (args) => <div style={{width: '1000px'}}><PoolTable {...args} /></div>;
export const Default = Template.bind({});
Default.args = {
    data: [
        {
            id: 1,
            tokenPairIcon: '',
            tokenPairs: ['WETH', 'CSPR'],
            liquidity: '4,653,213',
            volumen7d: '4,653,213',
            fees7d: '4,653,213',
            apr: '4,653,213',
            apr1: '4,653,213'
          },
          {
            id: 2,
            tokenPairIcon: '',
            tokenPairs: ['WETH', 'CSPR'],
            liquidity: '4,653,213',
            volumen7d: '4,453,213',
            fees7d: '4,053,213',
            apr: '4,653,213',
            apr1: '4,653,213'
          },
          {
            id: 3,
            tokenPairIcon: '',
            tokenPairs: ['WETH', 'CSPR'],
            liquidity: '4,653,213',
            volumen7d: '4,153,213',
            fees7d: '4,853,213',
            apr: '4,653,213',
            apr1: '4,653,213'
          },
    ]
}

