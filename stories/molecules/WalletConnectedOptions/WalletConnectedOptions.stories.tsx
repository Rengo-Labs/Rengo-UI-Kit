import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {WalletConnectedOptions} from "../../../src/components";
// @ts-ignore
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
    title: 'Components/Molecules/WalletConnectedOptions',
    component: WalletConnectedOptions,
} as ComponentMeta<typeof WalletConnectedOptions>;

// Create a master template for mapping args to render the WalletConnectedOptions component
const Template: ComponentStory<typeof WalletConnectedOptions> = (args) => <WalletConnectedOptions {...args} />;
export const Default = Template.bind({});
Default.args = {
    closeCallback: () => { console.log("closeCallback")},
    // @ts-ignore
    options: WALLET_CONNECTED_OPTIONS,
    isOpen: true
}
