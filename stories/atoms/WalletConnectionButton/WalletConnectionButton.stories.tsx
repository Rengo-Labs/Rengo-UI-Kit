import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {WalletConnectionButton, WalletConnectionButtonProps} from "../../../src/components";
import walletIcon from '../../assets/wallet-icon.svg'

export default {
  title: "Components/Atoms/WalletConnectionButton",
  component: WalletConnectionButton,
} as ComponentMeta<typeof WalletConnectionButton>;

// Create a master template for mapping args to render the WalletConnectionButton component
const Template: ComponentStory<typeof WalletConnectionButton> = (args: WalletConnectionButtonProps) => {
  return (
    <WalletConnectionButton {...args} />
  )
};
export const Default = Template.bind({});
Default.args = {
  startIcon: walletIcon,
  walletID: 'f13c5754-1f0a-4f07-b1ca-dc55e6d778e7',
  isWalletActive: true,
  onClick: () => console.log('toggle Wallet connection button')
  
}
