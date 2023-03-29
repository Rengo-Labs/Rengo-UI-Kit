import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {TransactionDetails} from "../../../src/components";
import {TransactionProps} from "../../../src/components/atoms/TransactionDetails/types";

export default {
  title: "Components/TransactionDetails",
  component: TransactionDetails,
} as ComponentMeta<typeof TransactionDetails>;

// Create a master template for mapping args to render the TransactionDetails component
const Template: ComponentStory<typeof TransactionDetails> = (args: TransactionProps) => {
  return (
    <TransactionDetails {...args} />
  )
};
export const Default = Template.bind({});
// @ts-ignore
// Default.args = { "label": "test" };
