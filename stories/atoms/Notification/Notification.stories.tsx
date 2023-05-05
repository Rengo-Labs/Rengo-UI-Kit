import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Notification } from "../../../src/components";
import { NotificationProps } from "../../../src/components/atoms/Notification/types";
export default {
  title: "Components/Atoms/Notification",
  component: Notification,
} as ComponentMeta<typeof Notification>;

// Create a master template for mapping args to render the Notification component
const Template: ComponentStory<typeof Notification> = (args: NotificationProps) => {
  return (
      <Notification {...args} />
  )
};

export const Default = Template.bind({});
Default.args = {
  title: 'Liquidity correctly removed',
  message: "Checking the progress of your <a href='/deploy'>deploy</a>.",
  // @ts-ignore
  type: 'success',
  // @ts-ignore
  position: 'top-center',
  onClose: () => console.log('close')
};
