import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Row, RowProps} from "../../../src/components";

export default {
  title: "Components/Row",
  component: Row,
} as ComponentMeta<typeof Row>;

// Create a master template for mapping args to render the Row component
const Template: ComponentStory<typeof Row> = (args: RowProps) => {
  return (
    <Row {...args} />
  )
};
export const Default = Template.bind({});
// @ts-ignore
// Default.args = { "label": "test" };
