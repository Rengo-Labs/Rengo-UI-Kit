import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {SwapTabs} from "../../../src/components";
// @ts-ignore
import casperToken from "../../assets/casper-token.svg";
// @ts-ignore
import bitcoinToken from "../../assets/bitcoin-token.svg";

export default {
    title: "Components/Molecules/SwapTabs",
    component: SwapTabs,
} as ComponentMeta<typeof SwapTabs>;

// Create a master template for mapping args to render the SwapPrice component
const Template: ComponentStory<typeof SwapTabs> = (args) => <div style={{width: '500px'}}><SwapTabs {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
    firstTokenImg: casperToken,
    secondTokenImg: bitcoinToken,
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
