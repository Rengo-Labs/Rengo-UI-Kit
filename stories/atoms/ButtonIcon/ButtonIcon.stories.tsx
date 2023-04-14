import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {ButtonIcon} from "../../../src/components";
import ethToken from '../../assets/eth-token.svg';
import downwardsArrowIcon from "../../assets/downwards-arrow-icon.svg";

export default {
  title: "Components/Atoms/ButtonIcon",
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
Default.args = {
    startIcon: ethToken,
    name: 'ETH',
    endIcon: downwardsArrowIcon,
    actionCallBack: () => console.log('ButtonIcon clicked')
};


