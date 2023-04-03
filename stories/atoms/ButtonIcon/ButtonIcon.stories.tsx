import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {ButtonIcon} from "../../../src/components";

export default {
  title: "Components/Atom/ButtonIcon",
  component: ButtonIcon,
  argTypes: {
      startIcon: { type: 'string' },
      name: { type: 'string' },
      endIcon: { type: 'string' },
      actionCallBack: { type: 'function' },
  },
} as ComponentMeta<typeof ButtonIcon>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof ButtonIcon> = (args) => {
  return (
    <ButtonIcon startIcon={args.startIcon} name={args.name} endIcon={args.endIcon} actionCallBack={args.actionCallBack} />
  )
};
export const Default = Template.bind({});
// @ts-ignore
Default.args = { "children": "ButtonIcon" };


