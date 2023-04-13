import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CreatePoolDialog } from "../../../src/components";
import { CreatePoolDialogProps } from "../../../src/components/molecules/CreatePoolDialog/types";

const TOKEN_LIST_DATA_CREATE_POOL = [
  { id: '3d3dfimfw33', name: 'CST', fullName: 'CasperSwap', amount: '1000000' },
  { id: 'd3r4rfgj7j7', name: 'WBTC', fullName: 'Wrapped Bitcoin', amount: '10000' },
  { id: '9j90fjgf8he', name: 'USDT', fullName: 'Teather', amount: '10000' },
  { id: '1jkjaasm2k1', name: 'USDC', fullName: 'USD Coin', amount: '10000' },
  { id: 'dd333d3es2s', name: 'WETH', fullName: 'Wrapped Ether', amount: '1000000'}
]

const POPULAR_TOKEN_LIST_DATA_CREATE_POOL = [
  { id: '3d3dfimfw33', name: 'CST', fullName: 'CasperSwap', amount: '1000000' },
  { id: 'd3r4rfgj7j7', name: 'WBTC', fullName: 'Wrapped Bitcoin', amount: '10000' },
  { id: '9j90fjgf8he', name: 'USDT', fullName: 'Teather', amount: '10000' },
  { id: '1jkjaasm2k1', name: 'USDC', fullName: 'USD Coin', amount: '10000' },
  { id: 'dd333d3es2s', name: 'WETH', fullName: 'Wrapped Ether', amount: '1000000'}
]


export default {
    title: "Components/Molecules/CreatePoolDialog",
    component: CreatePoolDialog,
} as ComponentMeta<typeof CreatePoolDialog>;

// Create a master template for mapping args to render the CreatePoolDialog component
const Template: ComponentStory<typeof CreatePoolDialog> = (args: CreatePoolDialogProps) => <CreatePoolDialog {...args} />;
export const Default = Template.bind({});

Default.args = {
  showDialog: true,
  closeCallback: () => console.log('dialog is closed'),
  tokenListData: TOKEN_LIST_DATA_CREATE_POOL,
  popularTokensData: POPULAR_TOKEN_LIST_DATA_CREATE_POOL
};
