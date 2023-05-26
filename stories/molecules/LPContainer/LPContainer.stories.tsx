import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {LPContainer} from "../../../src/components";
// @ts-ignore
import ethToken from '../../assets/eth-token.svg';
// @ts-ignore
import csprToken from '../../assets/cspr-token.svg';
// @ts-ignore
import btcToken from '../../assets/bitcoin-token.svg';
// @ts-ignore
import usdIcon from '../../assets/usdc-token.svg'


export default {
    title: "Components/Molecules/LPContainer",
    component: LPContainer,
} as ComponentMeta<typeof LPContainer>;

// Create a master template for mapping args to render the LPContainer component
const Template: ComponentStory<typeof LPContainer> = (args) => 
    <LPContainer {...args} />
export const Default = Template.bind({});
// @ts-ignore
Default.args = {
    title: 'My Liquidity',
    networkLink: 'https://testnet.cspr.live/contract-package/',
    lpTokens: [
        {
            firstTokenIcon: ethToken,
            secondTokenIcon: csprToken,
            isFavorite: false,
            firstSymbol: 'ETH',
            secondSymbol: 'CSPR',
            firstAmount: '200.00000002',
            secondAmount: '4000000.00000122',
            userLP: '10.22110000',
            totalLP: '232000',
            contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
            onOptionClick: (option, firstSymbol, secondSymbol) => {
            }
        },
        {
            firstTokenIcon: btcToken,
            secondTokenIcon: csprToken,
            isFavorite: false,
            firstSymbol: 'BTC',
            secondSymbol: 'CSPR',
            firstAmount: '0.05',
            secondAmount: '9000000.00000122',
            userLP: '1.22110000',
            totalLP: '34000',
            contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
            onOptionClick: (option, firstSymbol, secondSymbol) => {
            }
        },
        {
            firstTokenIcon: usdIcon,
            secondTokenIcon: csprToken,
            isFavorite: false,
            firstSymbol: 'USDT',
            secondSymbol: 'CSPR',
            firstAmount: '50.00000002',
            secondAmount: '4000.00000122',
            userLP: '19.22110000',
            totalLP: '23000',
            contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
            onOptionClick: (option, firstSymbol, secondSymbol) => {
            }
        },
    ]
};

export const LPFavorite = Template.bind({});
// @ts-ignore
LPFavorite.args = {
    title: 'My Liquidity',
    networkLink: 'https://testnet.cspr.live/contract-package/',
    lpTokens: [
        {
            firstTokenIcon: ethToken,
            secondTokenIcon: csprToken,
            isFavorite: true,
            firstSymbol: 'ETH',
            secondSymbol: 'CSPR',
            firstAmount: '200.00000002',
            secondAmount: '4000000.00000122',
            userLP: '10',
            totalLP: '232000',
            contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
            onOptionClick: (option, firstSymbol, secondSymbol) => {
            }
        },
        {
            firstTokenIcon: btcToken,
            secondTokenIcon: csprToken,
            isFavorite: true,
            firstSymbol: 'BTC',
            secondSymbol: 'CSPR',
            firstAmount: '0.05',
            secondAmount: '9000000.00000122',
            userLP: '1.02124355',
            totalLP: '34000',
            contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
            onOptionClick: (option, firstSymbol, secondSymbol) => {
            }
        },
        {
            firstTokenIcon: usdIcon,
            secondTokenIcon: csprToken,
            isFavorite: true,
            firstSymbol: 'USDT',
            secondSymbol: 'CSPR',
            firstAmount: '50.00000002',
            secondAmount: '4000.00000122',
            userLP: '19.22110000',
            totalLP: '23000',
            contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
            onOptionClick: (option, firstSymbol, secondSymbol) => {
            }
        },
    ]
};
