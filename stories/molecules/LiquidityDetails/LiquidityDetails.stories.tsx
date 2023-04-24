import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {LiquidityDetails} from "../../../src/components";

export default {
    title: "Components/Molecules/LiquidityDetails",
    component: LiquidityDetails,
} as ComponentMeta<typeof LiquidityDetails>;

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof LiquidityDetails> = (args) => <div style={{width: '600px'}}><LiquidityDetails  {...args}/></div>;
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

