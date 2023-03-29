import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Toggle, ToggleProps} from "../../../src/components";

export default {
  title: "Components/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

// Create a master template for mapping args to render the Toggle component
const Template: ComponentStory<typeof Toggle> = (args: ToggleProps) => {
  return (
    <Toggle {...args} />
  )
};
export const Default = Template.bind({});
// @ts-ignore
// Default.args = { "label": "test" };
