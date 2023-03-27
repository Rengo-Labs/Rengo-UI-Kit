import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Input} from "../../../src/components";
import {InputProps} from "../../../src/components/atoms/Input/types";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Input> = (args: InputProps) => {
  return (
    <Input {...args} />
  )
};
export const Default = Template.bind({});
// @ts-ignore
Default.args = { "label": "test" };
