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
    data: [
        {
            id: 1,
            token0Icon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
            token1Icon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
            pool: 'WETH-CSPR',
            name: 'WETH-CSPR',
            liquidity: '4,653,213',
            volume7d: '4,653,213',
            fees7d: '4,653,213',
            apr: '4,653,213',
            apr1: '4,653,213',
            balance:'0'
          },
          {
            id: 2,
            token0Icon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
            token1Icon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
            pool: 'USDT-CSPR',
            name: 'USDT-CSPR',
            liquidity: '4,653,213',
            volume7d: '4,453,213',
            fees7d: '4,053,213',
            apr: '4,653,213',
            apr1: '4,653,213',
            balance:'100000'
          },
          {
            id: 3,
            token0Icon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
            token1Icon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
            pool: 'BTC-CSPR',
            name: 'BTC-CSPR',
            liquidity: '4,653,213',
            volume7d: '4,153,213',
            fees7d: '4,853,213',
            apr: '4,653,213',
            apr1: '4,653,213',
            balance:'0'
          },
    ],
    handleSwap: (path: string, pool: string) => console.log(path, pool),
    handleView: (name: string) => console.log(name),
    handleAddLiquidity: (path: string, pool: string) => console.log(path, pool),
    handleTrash: (name: string) => console.log(name),
}

