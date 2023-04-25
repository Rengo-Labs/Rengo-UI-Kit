import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CreatePoolDialog } from "../../../src/components";
import { CreatePoolDialogProps } from "../../../src/components/molecules/CreatePoolDialog/types";

// @ts-ignore
import btcTokenIcon from "../../assets/bitcoin-token.svg";
// @ts-ignore
import ethTokenIcon from "../../assets/eth-token.svg";
// @ts-ignore
import cstTokenIcon from "../../assets/casper-token.svg";
// @ts-ignore
import usdtTokenIcon from "../../assets/tether-token.svg";
// @ts-ignore
import usdcTokenIcon from "../../assets/usdc-token.svg";

const TOKEN_LIST_DATA_CREATE_POOL = [
  { id: '3d3dfimfw33', name: 'CST', fullName: 'CasperSwap', amount: '1000000', tokenImg: cstTokenIcon },
  { id: 'd3r4rfgj7j7', name: 'WBTC', fullName: 'Wrapped Bitcoin', amount: '10000', tokenImg: btcTokenIcon },
  { id: '9j90fjgf8he', name: 'USDT', fullName: 'Teather', amount: '10000', tokenImg: usdtTokenIcon },
  { id: '1jkjaasm2k1', name: 'USDC', fullName: 'USD Coin', amount: '10000', tokenImg: usdcTokenIcon },
  { id: 'dd333d3es2s', name: 'WETH', fullName: 'Wrapped Ether', amount: '1000000', tokenImg: ethTokenIcon }
]

const POPULAR_TOKEN_LIST_DATA_CREATE_POOL = [
  { id: '3d3dfimfw33', name: 'CST', fullName: 'CasperSwap', amount: '1000000', tokenImg: cstTokenIcon },
  { id: 'd3r4rfgj7j7', name: 'WBTC', fullName: 'Wrapped Bitcoin', amount: '10000', tokenImg: btcTokenIcon },
  { id: '9j90fjgf8he', name: 'USDT', fullName: 'Teather', amount: '10000', tokenImg: usdtTokenIcon },
  { id: '1jkjaasm2k1', name: 'USDC', fullName: 'USD Coin', amount: '10000', tokenImg: usdcTokenIcon },
  { id: 'dd333d3es2s', name: 'WETH', fullName: 'Wrapped Ether', amount: '1000000', tokenImg: ethTokenIcon }
]

export default {
    title: "Components/Molecules/CreatePoolDialog",
    component: CreatePoolDialog,
} as ComponentMeta<typeof CreatePoolDialog>;

// Create a master template for mapping args to render the CreatePoolDialog component
const Template: ComponentStory<typeof CreatePoolDialog> = (args: CreatePoolDialogProps) => <CreatePoolDialog {...args} />;
export const Default = Template.bind({});

Default.args = {
  closeCallback: () => console.log('dialog is closed'),
  tokenListData: TOKEN_LIST_DATA_CREATE_POOL,
  popularTokensData: POPULAR_TOKEN_LIST_DATA_CREATE_POOL,
  onSelectToken: () => console.log('token selected'),
  onSelectFavoriteToken: (e) => {console.log('favorite token selected')},
};
