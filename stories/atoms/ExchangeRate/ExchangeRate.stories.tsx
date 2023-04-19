import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ExchangeRate } from "../../../src/components";

export default {
    title: "Components/Atoms/ExchangeRate",
    component: ExchangeRate,
} as ComponentMeta<typeof ExchangeRate>;
const Template: ComponentStory<typeof ExchangeRate> = (args) => <ExchangeRate {...args} />;
export const Default = Template.bind({});
Default.args = {
    tokenASymbol: 'CSPR',
    tokenBSymbol: 'ETH',
    exchangeRateA: 51.755764,
    exchangeRateB: 0.755764,
}
