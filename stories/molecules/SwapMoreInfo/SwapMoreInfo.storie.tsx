import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {SwapMoreInfo} from "../../../src/components";
export default {
    title: "Components/Molecules/SwapMoreInfo",
    component: SwapMoreInfo,
} as ComponentMeta<typeof SwapMoreInfo>;

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof SwapMoreInfo> = (args) => <div style={{width: '600px'}}><SwapMoreInfo  {...args}/></div>;
export const Default = Template.bind({});
Default.args = {
    firstSymbolToken: 'ETH',
    firstTokenAmount: 0.1,
    secondSymbolToken: 'DAI',
    secondTokenAmount: 0.1,
    priceImpactMessage: 'Price Impact High',
    priceImpact: 0.1,
    platformGasFee: 0.1,
    networkGasFee: 120,
    networkGasFeeSetter: () => console.log('networkGasFeeSetter'),
    slippageTolerance: 0.5,
    slippageSetter: () => console.log('slippageSetter'),
    pairPath: ['ETH', 'DAI'],
    calculateMinimumTokenReceived: () => 200
}

