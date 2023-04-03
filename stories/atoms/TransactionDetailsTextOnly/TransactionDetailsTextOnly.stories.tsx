import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {TransactionDetailsTextOnly, TransactionDetailsProps} from "../../../src/components";

export default {
  title: "Components/Atom/TransactionDetailsTextOnly",
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
// Default.args = { "label": "test" };
