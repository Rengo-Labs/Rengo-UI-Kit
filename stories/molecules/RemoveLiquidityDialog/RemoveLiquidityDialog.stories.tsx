import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RemoveLiquidityDialog } from "../../../src/components";
import { RemoveLiquidityDialogProps } from "../../../src/components/molecules/RemoveLiquidityDialog/types";
// @ts-ignore
import ethImg from '../../assets/eth-token.svg'
// @ts-ignore
import csprImg from '../../assets/cspr-token.svg'
// @ts-ignore
import csprImgpair from '../../assets/eth-cspr-pair.svg'

const REMOVE_LIQUIDITY_DATA = {
  id: 'fruteaeas',
  tokenName: 'ETH-CSPR',
  liquidity: '121231232.223232',
  allowance: 123123123123,
  firstIcon: ethImg,
  firstName: 'Ethereum',
  firstSymbol: 'ETH',
  firstLiquidity: 13112323.23423423,
  firstRate: 123.01,
  secondIcon: csprImg,
  secondName: 'Casper',
  secondSymbol: 'CSPR',
  secondLiquidity: 4333232.222,
  secondRate: 3123122.333
}

export default {
    title: "Components/Molecules/RemoveLiquidityDialog",
    component: RemoveLiquidityDialog,
} as ComponentMeta<typeof RemoveLiquidityDialog>;

// Create a master template for mapping args to render the RemoveLiquidityDialog component
const Template: ComponentStory<typeof RemoveLiquidityDialog> = (args: RemoveLiquidityDialogProps) => <RemoveLiquidityDialog {...args} />;
export const Default = Template.bind({});

Default.args = {
  id: 'f90c4f56-ae0a-4da8-bf3d-541c80c89f87',
  closeCallback: () => console.log('dialog is closed'),
  liquidityPoolData: REMOVE_LIQUIDITY_DATA,
  isOpen: true,
  disabledButton: true,
  disabledAllowanceButton: false
};
