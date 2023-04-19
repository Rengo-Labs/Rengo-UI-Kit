import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {WalletConnectedOptionsDialog} from "../../../src/components";
import {WalletConnectedOptionsDialogProps} from "../../../src/components/atoms/WalletConnectedOptionsDialog/types";
import lineBreakIcon from "../../assets/linkbreak.svg";

const WALLET_CONNECTED_OPTIONS = [
  {
    id: 'dmx0031b2b421',
    key: 'account',
    name: 'My Account',
    iconName: 'Copy',
    type: 'Redirect',
  },
  {
    id: '3d23f23xxx88nf',
    key: 'wallet',
    name: '6c166587-0e23-4d0c-86de-3c3d7a0f0c09',
    iconName: 'Copy',
    type: 'copy',
  },
  {
    id: '1x9x9900jjwoa',
    key: 'transactions',
    name: 'Recent Transactions',
    iconName: 'Clock',
    type: 'redirect',
  },
  {
    id: '0zokxj8h82nndl',
    key: 'disconnect',
    name: 'Disconnect Wallet',
    iconName: '',
    icon: lineBreakIcon,
    type: 'redirect',
  },
]

export default {
  title: "Components/Atoms/WalletConnectedOptionsDialog",
  component: WalletConnectedOptionsDialog,
} as ComponentMeta<typeof WalletConnectedOptionsDialog>;


// Create a master template for mapping args to render the WalletConnectedOptionsDialog component
const Template: ComponentStory<typeof WalletConnectedOptionsDialog> = (args: WalletConnectedOptionsDialogProps) => {
  return (
    <WalletConnectedOptionsDialog {...args} />
  )
};
export const Default = Template.bind({});
Default.args = {
  id: 'f90c4f56-ae0a-4da8-bf3d-541c80c89f87',
  closeCallback: () => console.log('close callback'),
  options: WALLET_CONNECTED_OPTIONS
}
