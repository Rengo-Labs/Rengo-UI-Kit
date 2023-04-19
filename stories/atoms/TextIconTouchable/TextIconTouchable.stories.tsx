import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {TextIconTouchable} from "../../../src/components";
import ethToken from '../../assets/eth-token.svg';
import downwardsArrowIcon from "../../assets/downwards-arrow-icon.svg";

export default {
  title: "Components/Atoms/TextIconTouchable",
  component: TextIconTouchable,
  argTypes: {
      startIcon: { type: 'string' },
      name: { type: 'string' },
      endIcon: { type: 'string' },
      actionCallBack: { type: 'function' },
  },
} as ComponentMeta<typeof TextIconTouchable>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof TextIconTouchable> = (args) => {
  return (
    <TextIconTouchable startIcon={args.startIcon} name={args.name} endIcon={args.endIcon} actionCallBack={args.actionCallBack} />
  )
};
export const Default = Template.bind({});
// @ts-ignore
Default.args = {
    startIcon: ethToken,
    name: 'ETH',
    endIcon: downwardsArrowIcon,
    actionCallBack: () => console.log('TextIconTouchable clicked')
};


