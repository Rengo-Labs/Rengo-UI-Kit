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
    gasFee: 0.1,
    slippageTolerance: 0.005,
    calculateMinimumTokenReceived: (() =>  200),
    firstSymbolToken: 'CSPR',
    firstTokenAmount: 10,
    pairPath: ['CSPR', 'ETH'],
    secondSymbolToken: 'ETH',
    secondTokenAmount: 200,
    priceImpact: 1.5,
    priceImpactMessage: 'Low Price Impact',
    gasFeeSetter    : () => {},
    slippageSetter  : () => {},
}

export const WithoutPair = Template.bind({});
WithoutPair.args = {
    firstTokenImg: casperToken,
    secondTokenImg: bitcoinToken,
    gasFee: 0.1,
    slippageTolerance: 0.005,
    calculateMinimumTokenReceived: (() =>  200),
    firstSymbolToken: 'WETH',
    firstTokenAmount: 10,
    pairPath: [],
    secondSymbolToken: 'ETH',
    secondTokenAmount: 200,
    priceImpact: 1.5,
    priceImpactMessage: 'Low Price Impact',
    gasFeeSetter    : () => {},
    slippageSetter  : () => {},
}

export const WithMoreThanOnePair = Template.bind({});
WithMoreThanOnePair.args = {
    firstTokenImg: casperToken,
    secondTokenImg: bitcoinToken,
    gasFee: 0.1,
    slippageTolerance: 0.005,
    calculateMinimumTokenReceived: (() =>  200),
    firstSymbolToken: 'CSPR',
    firstTokenAmount: 10,
    pairPath: ['ETH', 'CSPR', 'BTC'],
    secondSymbolToken: 'ETH',
    secondTokenAmount: 200,
    priceImpact: 1.5,
    priceImpactMessage: 'Low Price Impact',
    gasFeeSetter    : () => {},
    slippageSetter  : () => {},
}
