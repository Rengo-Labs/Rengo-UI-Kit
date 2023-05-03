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
export const Default = Template.bind({});
Default.args = {
    firstTokenImg: casperToken,
    secondTokenImg: bitcoinToken,
    platformGasFee: 0.1,
    slippageTolerance: 0.005,
    calculateMinimumTokenReceived: (() =>  200),
    firstSymbolToken: 'CSPR',
    firstTokenAmount: 1000,
    pairPath: ['CSPR', 'ETH'],
    secondSymbolToken: 'ETH',
    secondTokenAmount: 200,
    priceImpact: 1.5,
    priceImpactMessage: 'Low Price Impact',
    networkGasFee: 40,
    networkGasFeeSetter    : (value) => {console.log("new networkGasFee", value)},
    slippageSetter  : (value) => {console.log("new slippage", value)},
    // graphic
    onClickButton0: () => {console.log("onClickButton0")},
    onClickButton1: () => {console.log("onClickButton1")},
    graphicData: data,
    todayPrice: '1000',
    yesterdayPrice: '2000',
    xAxisName: 'name',
    chart0Name: 'eth',
    chart1Name: 'cspr',
    showChart1: true,
    showChart0: true
}

export const WithoutPair = Template.bind({});
WithoutPair.args = {
    firstTokenImg: casperToken,
    secondTokenImg: bitcoinToken,
    platformGasFee: 0.1,
    slippageTolerance: 0.005,
    calculateMinimumTokenReceived: (() =>  200),
    firstSymbolToken: 'WETH',
    firstTokenAmount: 1000,
    pairPath: [],
    secondSymbolToken: 'ETH',
    secondTokenAmount: 200,
    priceImpact: 1.5,
    priceImpactMessage: 'Low Price Impact',
    networkGasFee: 40,
    networkGasFeeSetter    : (value) => {console.log("new networkGasFee", value)},
    slippageSetter  : (value) => {console.log("new slippage", value)},
    // graphic
    onClickButton0: () => {console.log("onClickButton0")},
    onClickButton1: () => {console.log("onClickButton1")},
    graphicData: data,
    todayPrice: '1000',
    yesterdayPrice: '2000',
    xAxisName: 'name',
    chart0Name: 'eth',
    chart1Name: 'cspr',
    showChart1: true,
    showChart0: true
}

export const WithMoreThanOnePair = Template.bind({});
WithMoreThanOnePair.args = {
    firstTokenImg: casperToken,
    secondTokenImg: bitcoinToken,
    platformGasFee: 0.1,
    slippageTolerance: 0.005,
    calculateMinimumTokenReceived: (() =>  200),
    firstSymbolToken: 'CSPR',
    firstTokenAmount: 1000,
    pairPath: ['ETH', 'CSPR', 'BTC'],
    secondSymbolToken: 'ETH',
    secondTokenAmount: 200,
    priceImpact: 1.5,
    priceImpactMessage: 'Low Price Impact',
    networkGasFee: 40,
    networkGasFeeSetter    : (value) => {console.log("new networkGasFee", value)},
    slippageSetter  : (value) => {console.log("new slippage", value)},
    // graphic
    onClickButton0: () => {console.log("onClickButton0")},
    onClickButton1: () => {console.log("onClickButton1")},
    graphicData: data,
    todayPrice: '1000',
    yesterdayPrice: '2000',
    xAxisName: 'name',
    chart0Name: 'eth',
    chart1Name: 'cspr',
    showChart1: true,
    showChart0: false
}

export const WithTabDefault = Template.bind({});
WithTabDefault.args = {
    firstTokenImg: casperToken,
    secondTokenImg: bitcoinToken,
    platformGasFee: 0.1,
    slippageTolerance: 0.005,
    calculateMinimumTokenReceived: (() =>  200),
    firstSymbolToken: 'CSPR',
    firstTokenAmount: 1000,
    pairPath: ['ETH', 'CSPR', 'BTC'],
    secondSymbolToken: 'ETH',
    secondTokenAmount: 200,
    priceImpact: 1.5,
    priceImpactMessage: 'Low Price Impact',
    networkGasFee: 40,
    networkGasFeeSetter    : (value) => {console.log("new networkGasFee", value)},
    slippageSetter  : (value) => {console.log("new slippage", value)},
    // graphic
    onClickButton0: () => {console.log("onClickButton0")},
    onClickButton1: () => {console.log("onClickButton1")},
    graphicData: data,
    todayPrice: '1000',
    yesterdayPrice: '2000',
    xAxisName: 'name',
    chart0Name: 'eth',
    chart1Name: 'cspr',
    showChart1: true,
    showChart0: false,
    tabDefault: 2
}
