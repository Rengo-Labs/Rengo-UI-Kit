import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {PoolTable} from "../../../src/components";
export default {
    title: "Components/Molecules/PoolTable",
    component: PoolTable,
} as ComponentMeta<typeof PoolTable>;

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof PoolTable> = (args) => <div style={{width: '1020px'}}><PoolTable {...args} /></div>;
export const Default = Template.bind({});
Default.args = {
    networkLink: 'https://testnet.cspr.live/contract-package/',
    data: [
      {
        contractPackage: "dc13b188563da4a1afa67b441e77d045db8a71dba678b832dfb40b420d85bcd2",
        name: "WCSPR-CST",
        pool: "WCSPR-CST",
        token0Icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        token1Icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        yourLiquidity: '$607,616.03',
        volume7d: '$3,999.87',
        fees7d: '$1,999.87',
        balance: "$3,999.87",
        isFavorite: true,
        yourLiquidityTokens: "228.521956293 CSPR",
        assetsPoolToken0: "1055.512409755 WCSPR",
        assetsPoolToken1: "48.456722835 CST",
        yourShare: "0.00"
      },
      {
        contractPackage: "a5a9a804a383f3b0e131c85d471542af2c6d4ec57bab39182ba93dd7bd86f46c",
        name: "WCSPR-WBTC",
        pool: "WCSPR-WBTC",
        token0Icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        token1Icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        yourLiquidity: '$5,405.01',
        volume7d: '$2,999.87',
        fees7d: '$1,199.87',
        balance: "$3,999.87",
        isFavorite: false,
        yourLiquidityTokens: "45.760379738 CSPR",
        assetsPoolToken0: "999.999999592 WCSPR",
        assetsPoolToken1: "2.058457853 WBTC",
        yourShare: "0.00"
      },
      {
        contractPackage: "a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6",
        name: "WCSPR-WETH",
        pool: "WCSPR-WETH",
        token0Icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        token1Icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        yourLiquidity: '$24,711.79',
        volume7d: '$999.87',
        fees7d: '$1,999.87',
        balance: "0",
        isFavorite: false,
        yourLiquidityTokens: "0 CSPR",
        assetsPoolToken0: "0 WCSPR",
        assetsPoolToken1: "0 WETH",
        yourShare: "0.00"
      },
      {
        contractPackage: "800dee0fb5abf6d3525f520a4b052d8d36edb985a748a671209745c80836c2af",
        name: "USDT-WCSPR",
        pool: "WCSPR-USDT",
        token0Icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        token1Icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        yourLiquidity: '$99,853.40',
        volume7d: '$399.87',
        fees7d: '$9.87',
        balance: "0",
        isFavorite: true,
        yourLiquidityTokens: "0 CSPR",
        assetsPoolToken0: "0 WCSPR",
        assetsPoolToken1: "0 USDT",
        yourShare: "0.00"
      },
      {
        contractPackage: "cf56e334481fe2bf0530e0c03a586d2672da8bfe1d1d259ea91457a3bd8971e0",
        pool: "WCSPR-USDC",
        name: "WCSPR-USDC",
        token0Icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        token1Icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        yourLiquidity: '$101,831.42',
        volume7d: '$9.87',
        fees7d: '$99.87',
        balance: "0",
        isFavorite: false,
        yourLiquidityTokens: "0 CSPR",
        assetsPoolToken0: "0 WCSPR",
        assetsPoolToken1: "0 USDC",
        yourShare: "0.00"
      },
      {
        contractPackage: "6de9a63441e43d75e8774675407ed3d6775b0e5f3fa35382c744980733030902",
        pool: "USDT-USDC",
        name: "USDT-USDC",
        token0Icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        token1Icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        yourLiquidity: '$199,751,270,462.82',
        volume7d: '$9.87',
        fees7d: '$99.87',
        balance: "0",
        isFavorite: true,
        yourLiquidityTokens: "0 CSPR",
        assetsPoolToken0: "0 USDT",
        assetsPoolToken1: "0 USDT",
        yourShare: "0.00"
      },
      {
        contractPackage: "ec323e5f35ef519165bacaaf05af3277fc7f55d33377d1cae4117807eb6913e1",
        name: "dWBTC-WCSPR",
        pool: "WCSPR-dWBTC",
        token0Icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        token1Icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        yourLiquidity: '$35,518.81',
        volume7d: '$9.87',
        fees7d: '$99.87',
        balance: "0",
        isFavorite: false,
        yourLiquidityTokens: "0 CSPR",
        assetsPoolToken0: "0 WCSPR",
        assetsPoolToken1: "0 dWBTC",
        yourShare: "0.00"
      },
      {
        contractPackage: "14d531d1fe0cc1fd8ad46a5923116a28520359ce155e0f145e985fa7269adde6",
        pool: "CST-dWBTC",
        name: "CST-dWBTC",
        token0Icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        token1Icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        yourLiquidity: '$322,086.29',
        volume7d: '$9.87',
        fees7d: '$99.87',
        balance: "0",
        isFavorite: false,
        yourLiquidityTokens: "0 CSPR",
        assetsPoolToken0: "0 CST",
        assetsPoolToken1: "0 dWBTC",
        yourShare: "0.00"
      }
    ],
    handleSwap: (path: string, pool: string) => console.log(path, pool),
    handleView: (name: string) => console.log(name),
    handleAddLiquidity: (path: string, pool: string) => console.log(path, pool),
    handleTrash: (name: string) => console.log(name),
}

