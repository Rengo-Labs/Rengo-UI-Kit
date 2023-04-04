import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {TransactionDetails, Icons} from "../../../src/components";
import {TransactionProps} from "../../../src/components/atoms/TransactionDetails/types";
// @ts-ignore
import ethCsprPair from '../../../example/src/assets/eth-cspr-pair.svg';
export default {
  title: "Components/Atoms/TransactionDetails",
  component: TransactionDetails,
} as ComponentMeta<typeof TransactionDetails>;

// @ts-ignore
const star = <Icons name="Star" color='#715FF5' size={24} />;

// Create a master template for mapping args to render the TransactionDetails component
const Template: ComponentStory<typeof TransactionDetails> = (args: TransactionProps) => {
  return (
    <TransactionDetails {...args} />
  )
};
export const Default = Template.bind({});
Default.args = {
  // @ts-ignore
  distribution: 'space-evenly',
  iconSize: 45,
  Icon: ethCsprPair,
  tokenNames: ['Wrapper Ether', 'Wrapper Casper'],
  tokenNameSymbols: ['WETH', 'CSPR'],
  amount:'0,3',
  LeftAdornment: star,
  LeftAdornmentCallback: () => console.log('favorite clicked')
}
