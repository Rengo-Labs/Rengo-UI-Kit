import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {TransactionDetailsTextOnly, TransactionDetailsProps} from "../../../src/components";

export default {
  title: "Components/Atoms/TransactionDetailsTextOnly",
  component: TransactionDetailsTextOnly,
} as ComponentMeta<typeof TransactionDetailsTextOnly>;

// Create a master template for mapping args to render the TransactionDetailsTextOnly component
const Template: ComponentStory<typeof TransactionDetailsTextOnly> = (args: TransactionDetailsProps) => {
  return (
    <TransactionDetailsTextOnly {...args} />
  )
};
export const Default = Template.bind({});
// @ts-ignore
Default.args = {
    tokenInfo: [
    '1 Wrapper Ether = 391.361884674 Wrapper Casper',
    '1 Wrapper Casper = 0.002555180 Wrapper Ether'
    ]};
