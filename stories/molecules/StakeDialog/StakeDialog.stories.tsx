import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StakeDialog } from "../../../src/components";
import { StakeDialogProps } from "../../../src/components/molecules/StakeDialog/types";
// @ts-ignore
import ethImg from '../../assets/eth-token.svg'
// @ts-ignore
import csprImg from '../../assets/cspr-token.svg'
// @ts-ignore
import csprImgpair from '../../assets/eth-cspr-pair.svg'

const REMOVE_LIQUIDITY_DATA = {
  id: 'fruteaeas',
  tokenName: 'WETH-WCSPR',
  liquidity: '121231232.223232',
  allowance: 123123123123,
  firstIcon: ethImg,
  firstName: 'Wrapper Ether',
  firstSymbol: 'WETH',
  secondIcon: csprImg,
  secondName: 'Wrapper Casper',
  secondSymbol: 'WCSPR'
}

export default {
    title: "Components/Molecules/StakeDialog",
    component: StakeDialog,
} as ComponentMeta<typeof StakeDialog>;

// Create a master template for mapping args to render the RemoveLiquidityDialog component
const Template: ComponentStory<typeof StakeDialog> = (args: StakeDialogProps) => <StakeDialog {...args} />;
export const Default = Template.bind({});

Default.args = {
  titleDialog: "Stake",
  titleConfirmButton: "Stake",
  id: 'f90c4f56-ae0a-4da8-bf3d-541c80c89f87',
  closeCallback: () => console.log('dialog is closed'),
  // @ts-ignore
  liquidityPoolData: REMOVE_LIQUIDITY_DATA,
  isOpen: true,
  disabledButton: false,
  disabledAllowanceButton: false,
  showAllowance: false,
  defaultValue: 0,
  handleChangeInput: (e) => console.log('input value is changed', e),
  handleAction: () => console.log('stake liquidity button is clicked'),
  calculatedAmounts: {
    lpAmount: '0,3',
    firstAmount: '0,3',
    secondAmount: '0,3'
  }
};

export const Allowance = Template.bind({});
Allowance.args = {
  titleDialog: "Stake",
  id: 'f90c4f56-ae0a-4da8-bf3d-541c80c89f87',
  closeCallback: () => console.log('dialog is closed'),
  // @ts-ignore
  liquidityPoolData: REMOVE_LIQUIDITY_DATA,
  isOpen: true,
  disabledButton: true,
  disabledAllowanceButton: true,
  showAllowance: true,
  defaultValue: 0,
  handleChangeInput: (e) => console.log('input value is changed', e),
  handleAction: () => console.log(' Stake button is clicked'),
  calculatedAmounts: {
    lpAmount: 123123.123,
    firstAmount: 1234.123,
    secondAmount: 123.123
  }
};

export const UnStake = Template.bind({});
UnStake.args = {
  titleDialog: "Unstake & Claim",
  titleConfirmButton: "Unstake & Claim",
  id: 'f90c4f56-ae0a-4da8-bf3d-541c80c89f87',
  closeCallback: () => console.log('dialog is closed'),
  // @ts-ignore
  liquidityPoolData: REMOVE_LIQUIDITY_DATA,
  isOpen: true,
  disabledButton: true,
  disabledAllowanceButton: true,
  showAllowance: true,
  defaultValue: 0,
  handleChangeInput: (e) => console.log('input value is changed', e),
  handleAction: () => console.log('stake liquidity button is clicked'),
  calculatedAmounts: {
    lpAmount: 123123.123,
    firstAmount: 1234.123,
    secondAmount: 123.123
  }
};
