import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ClaimDialog } from "../../../src/components";
import { ClaimDialogProps } from "../../../src/components/molecules/ClaimDialog/types";
// @ts-ignore
import ethImg from '../../assets/eth-token.svg'
// @ts-ignore
import csprImg from '../../assets/cspr-token.svg'
// @ts-ignore
import csprImgpair from '../../assets/eth-cspr-pair.svg'

export default {
    title: "Components/Molecules/ClaimDialog",
    component: ClaimDialog,
} as ComponentMeta<typeof ClaimDialog>;

// Create a master template for mapping args to render the RemoveLiquidityDialog component
const Template: ComponentStory<typeof ClaimDialog> = (args: ClaimDialogProps) => <ClaimDialog {...args} />;
export const Default = Template.bind({});

Default.args = {
  titleDialog: "Claim",
  titleConfirmButton: "Claim",
  id: 'f90c4f56-ae0a-4da8-bf3d-541c80c89f87',
  closeCallback: () => console.log('dialog is closed'),
  isOpen: true,
  disabledButton: false,
  handleAction: () => console.log('stake liquidity button is clicked'),
  networkGasFeeStake: 10,
  setNetworkGasFeeStake: (value) => {console.log(value)}
};

export const UnStake = Template.bind({});
UnStake.args = {
  titleDialog: "Unstake & Claim",
  titleConfirmButton: "Unstake & Claim",
  id: 'f90c4f56-ae0a-4da8-bf3d-541c80c89f87',
  closeCallback: () => console.log('dialog is closed'),
  isOpen: true,
  disabledButton: true,
  handleAction: () => console.log('stake liquidity button is clicked'),
};
