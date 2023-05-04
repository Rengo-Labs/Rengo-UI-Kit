import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {BalanceTable} from "../../../src/components";

export default {
    title: "Components/Molecules/BalanceTable",
    component: BalanceTable,
} as ComponentMeta<typeof BalanceTable>;

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof BalanceTable> = (args) => <BalanceTable {...args} />;
export const Default = Template.bind({});
Default.args = {
   data : [
    {
        id: 1,
        crypto: 'Casper',
        cryptoIcon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        mycrypto: 0.00000000,
        '24h': '0.00%',
        '7d': '0.00%',
        '15d': '0.00%',
        '30d': '0.00%'
    },
    {
        id: 2,
        crypto: 'CasperSwap',
        cryptoIcon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
        mycrypto: 0.00000000,
        '24h': '0.00%',
        '7d': '0.00%',
        '15d': '0.00%',
        '30d': '0.00%'
    },
    {
        id: 3,
        crypto: 'Wrapped Bitcoin',
        cryptoIcon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
        mycrypto: 0.00000000,
        '24h': '0.00%',
        '7d': '0.00%',
        '15d': '0.00%',
        '30d': '0.00%'
    },
    {
        id: 4,
        crypto: 'Wrapped Ether',
        cryptoIcon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
        mycrypto: 0.00000000,
        '24h': '0.00%',
        '7d': '0.00%',
        '15d': '0.00%',
        '30d': '0.00%'
    },
    {
        id: 5,
        crypto: 'Debug Wrapped BTC',
        cryptoIcon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
        mycrypto: 0.00000000,
        '24h': '0.00%',
        '7d': '0.00%',
        '15d': '0.00%',
        '30d': '0.00%'
    }
]
}

