import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {SwapMoreInfo} from "../../../src/components";

export default {
    title: "Components/Molecules/SwapMoreInfo",
    component: SwapMoreInfo,
} as ComponentMeta<typeof SwapMoreInfo>;
SwapMoreInfo
// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof SwapMoreInfo> = (args) => <div style={{width: '600px'}}><SwapMoreInfo  {...args}/></div>;
export const Default = Template.bind({});
Default.args = {
    firstSelectedToken: {
        amount: '0.016491306',
        allowance: '',
        symbolPair: '',
        chainId: 23456,
        contractHash: '',
        decimals: 2,
        logoURI: '',
        name: 'CSPR',
        packageHash: '',
        symbol: 'CSPR',
        priceUSD: 'CSPR'
      },
    
    secondSelectedToken: {
        amount: '351149.146168057',
        allowance: '',
        symbolPair: '',
        chainId: 23456,
        contractHash: '',
        decimals: 2,
        logoURI: '',
        name: 'WETH',
        packageHash: '',
        symbol: 'WETH',
        priceUSD: 'WETH'
      },
      gasFee: 15,
      slippageTolerance: 0.05
}

