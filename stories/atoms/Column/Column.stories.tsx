import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Column, ColumnProps} from "../../../src/components";

export default {
  title: "Components/Column",
  component: Column,
} as ComponentMeta<typeof Column>;

// Create a master template for mapping args to render the Column component
const Template: ComponentStory<typeof Column> = (args: ColumnProps) => {
  return (
    <Column {...args} />
  )
};
export const Default = Template.bind({});
// @ts-ignore
// Default.args = { "label": "test" };
