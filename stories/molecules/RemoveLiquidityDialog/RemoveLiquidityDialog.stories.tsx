import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RemoveLiquidityDialog } from "../../../src/components";
import { RemoveLiquidityDialogProps } from "../../../src/components/molecules/RemoveLiquidityDialog/types";

const REMOVE_LIQUIDITY_DATA = [
  { id: 'd3jd92d', tokenNames: ['Wrapper Ether', 'Wrapper Casper'], tokenNameSymbols: ['WETH', 'CSPR'], amount: '0,3' },
  { id: 'c9c843b', tokenNames: ['Wrapper Ether'], tokenNameSymbols: ['WETH'], amount: '0,3' },
  { id: '1qwski4', tokenNames: ['Wrapper Casper'], tokenNameSymbols: ['CSPR'], amount: '0,3' }
]

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
  liquidityPoolData: REMOVE_LIQUIDITY_DATA
};
