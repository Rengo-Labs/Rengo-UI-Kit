import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {PoolTable} from "../../../src/components";
export default {
    title: "Components/Molecules/PoolTable",
    component: PoolTable,
} as ComponentMeta<typeof PoolTable>;

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof PoolTable> = (args) => <div style={{width: '1250px'}}><PoolTable {...args} /></div>;
export const Default = Template.bind({});
Default.args = {
    networkLink: 'https://testnet.cspr.live/contract-package/',
    data: [
        {
            id: 1,
            token0Icon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
            token1Icon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
            pool: 'WETH-CSPR',
            name: 'WETH-CSPR',
            liquidity: 3904.38788921603781511862,
            volume7d: -5.456,
            fees7d: -2.123,
            apr: 6.12345,
            balance:'0',
            contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
          },
          {
            id: 2,
            token0Icon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
            token1Icon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
            pool: 'USDT-CSPR',
            name: 'USDT-CSPR',
            liquidity: -35904.38788921603781511862,
            volume7d: 4.123,
            fees7d: -404.678,
            apr: -1.12,
            balance:'100000',
            contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
          },
          {
            id: 3,
            token0Icon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
            token1Icon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
            pool: 'BTC-CSPR',
            name: 'BTC-CSPR',
            liquidity: -8904.38788921603781511862,
            volume7d: 3.40,
            fees7d: -90.234,
            apr: 2.09,
            balance:'0',
            contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
          },
    ],
    handleSwap: (path: string, pool: string) => console.log(path, pool),
    handleView: (name: string) => console.log(name),
    handleAddLiquidity: (path: string, pool: string) => console.log(path, pool),
    handleTrash: (name: string) => console.log(name),
}

