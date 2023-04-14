import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Input} from "../../../src/components";
import {InputProps} from "../../../src/components/atoms/Input/types";
import {ButtonIcon} from "../../../src/components";
import ethToken from '../../assets/eth-token.svg'
import downwardsArrowIcon from '../../assets/downwards-arrow-icon.svg'
import {IconSize, Type} from "../../../src/components/atoms/Input/types";

export default {
  title: "Components/Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const icon = <ButtonIcon
    startIcon={ethToken}
    name={'ETH'}
    endIcon={downwardsArrowIcon}
    actionCallBack={() => console.log('ButtonIcon clicked')}
/>
// Create a master template for mapping args to render the Input component
const Template: ComponentStory<typeof Input> = (args: InputProps) => {
  return (
    <Input {...args} />
  )
};

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  placeholder: 'PlaceHolder_input',
  helperText: 'Something is wrong!',
  type: Type.IconLabelHelperText,
  label: 'Label test',
  Icon: icon,
  iconSize: IconSize.Large,
  onChange: (value : string) => { console.log('Input changed', value); return value},
  validator: (value: string) => { console.log('Input validator', value); return value}
};
