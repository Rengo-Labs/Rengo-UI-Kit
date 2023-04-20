import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {TextIconTouchable} from "../../../src/components";
// @ts-ignore
import ethToken from '../../assets/eth-token.svg';
// @ts-ignore
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
    <TextIconTouchable {...args} />
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

export const WithIconBig = Template.bind({});
// @ts-ignore
WithIconBig.args = {
    startIcon: ethToken,
    name: 'ETH',
    endIcon: downwardsArrowIcon,
    actionCallBack: () => console.log('TextIconTouchable clicked'),
    iconWidth: 45,
    iconHeight: 45,
}



