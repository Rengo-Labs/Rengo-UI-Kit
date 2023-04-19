import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ExchangeRates } from "../../../src/components";

export default {
    title: "Components/Molecules/ExchangeRates",
    component: ExchangeRates,
} as ComponentMeta<typeof ExchangeRates>;

// Create a master template for mapping args to render the ExchangeRates component
const Template: ComponentStory<typeof ExchangeRates> = (args) => <ExchangeRates {...args} />;
export const Default = Template.bind({});
Default.args = {
    handleClickSwap: () => console.log('handleClickSwap'),
    tokenASymbol: 'CST',
    tokenBSymbol: 'ETH',
    exchangeRateA: 1,
    exchangeRateB: 0.5,
    getProgress: () => 0,
    clearProgress: () => console.log('clearProgress'),
    strokeWidth: 12,
    handlerButtonCircle: () => Promise.resolve()
}
