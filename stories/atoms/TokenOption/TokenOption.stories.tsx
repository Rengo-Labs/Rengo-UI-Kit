import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {TokenOption} from "../../../src/components";
import ethLogo from '../../assets/eth-logo.svg';
export default {
    title: "Components/Atoms/TokenOption",
    component: TokenOption,
} as ComponentMeta<typeof TokenOption>;

// Create a master template for mapping args to render the TokenOption component
const Template: ComponentStory<typeof TokenOption> = (args) => <TokenOption {...args} />;
export const Default = Template.bind({});
// @ts-ignore
Default.args = {
    tokenImg: ethLogo,
    token: 'ETH'
};

export const Option1 = Template.bind({});
// @ts-ignore
Option1.args = {
    tokenImg: ethLogo,
    token: 'CSPR',
    option1: true
}
