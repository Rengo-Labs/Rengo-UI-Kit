import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StakeMessage } from "../../../src/components";
// @ts-ignore
import csprToken from '../../assets/cspr-token.svg';
export default {
    title: "Components/Molecules/StakeMessage",
    component: StakeMessage,
} as ComponentMeta<typeof StakeMessage>;


// Create a master template for mapping args to render the RemoveLiquidityDialog component
const Template: ComponentStory<typeof StakeMessage> = (args) => <StakeMessage {...args} />;
export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    tokenImg: csprToken,
    tokenName: "CST",
    amount: "0,65000000",
    closeCallback: () => console.log("close"),
}
