import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Input} from "../../../src/components";
import {InputProps} from "../../../src/components/atoms/Input/types";
import {ButtonIcon} from "../../../src/components";
// @ts-ignore
import ethToken from '../../../example/src/assets/eth-token.svg'
// @ts-ignore
import downwardsArrowIcon from '../../../example/src/assets/downwards-arrow-icon.svg'
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
  type: 'icon-label-helper-text',
  label: 'Label test',
  // Icon={<AlertTriangle color="red" size={24} />}
  Icon: icon,
  iconSize:'large',
  onChange: () => console.log('Input changed'),
  validator: () => console.log('Input validator')
};
