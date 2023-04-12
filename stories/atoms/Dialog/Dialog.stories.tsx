import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dialog } from "../../../src/components";
import { DialogProps } from "../../../src/components/atoms/Dialog";
export default {
  title: "Components/Atoms/Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

// Create a master template for mapping args to render the Dialog component
const Template: ComponentStory<typeof Dialog> = (args: DialogProps) => {
  return (
      <Dialog {...args} />
  )
};

export const Default = Template.bind({});
Default.args = {
  title: 'Dialog test title',
  children: <div>Dialog default value</div>,
  onClose: () => console.log('Dialog closed'),
  isOpen: true
};
