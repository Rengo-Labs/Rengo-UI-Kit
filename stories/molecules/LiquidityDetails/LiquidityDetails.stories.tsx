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
    firstSymbol: 'ETH',
    secondSymbol: 'USDT',
    maxAmount: 2000,
    firstTotalLiquidity: 1000000,
    secondTotalLiquidity: 10000000,
    totalSupply: '',
    slippage: 0.05,
    setSlippage: (value) => {console.log("slippage", value)},
    networkFee: 15,
    setNetworkFee: (value) => {console.log("networkFee", value)}
}

