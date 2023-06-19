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
const LPTokensDefault = [
    {
        contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
        firstTokenIcon: ethToken,
        secondTokenIcon: csprToken,
        isFavorite: false,
        firstSymbol: 'ETH',
        secondSymbol: 'CSPR',
        firstAmount: '200.00000002',
        secondAmount: '4000000.00000122',
        userUSDLP: '100.00000000',
        userLP: '10.22110000',
        totalUSDLP: '232000',
        totalLP: '232000',
        yourShare: '0.00',
        lpStaked: '0.00',
        apr: '0.99',
        onOptionClick: (option, firstSymbol, secondSymbol) => {
        },
        hasStake: false,
        hasGauge: false
    },
    {
        firstTokenIcon: btcToken,
        secondTokenIcon: csprToken,
        isFavorite: false,
        firstSymbol: 'BTC',
        secondSymbol: 'CSPR',
        firstAmount: '0.05',
        secondAmount: '9000000.00000122',
        userUSDLP: '100.00000000',
        userLP: '10.22110000',
        totalUSDLP: '232000',
        totalLP: '232000',
        yourShare: '0.00',
        lpStaked: '0.00',
        contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
        onOptionClick: (option, firstSymbol, secondSymbol) => {
        },
        hasStake: false,
        hasGauge: false
    },
    {
        firstTokenIcon: usdIcon,
        secondTokenIcon: csprToken,
        isFavorite: false,
        firstSymbol: 'USDT',
        secondSymbol: 'CSPR',
        firstAmount: '50.00000002',
        secondAmount: '4000.00000122',
        userUSDLP: '100.00000000',
        userLP: '10.22110000',
        totalUSDLP: '232000',
        totalLP: '232000',
        yourShare: '0.00',
        lpStaked: '0.00',
        contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
        onOptionClick: (option, firstSymbol, secondSymbol) => {
        },
        hasStake: false,
        hasGauge: false
    }
]
Default.args = {
    title: 'My Liquidity',
    networkLink: 'https://testnet.cspr.live/contract-package/',
    lpTokens: LPTokensDefault
};

export const LPFavorite = Template.bind({});
// @ts-ignore
const LPFavoriteTokens = [{
    contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
    firstTokenIcon: ethToken,
    secondTokenIcon: csprToken,
    isFavorite: false,
    firstSymbol: 'ETH',
    secondSymbol: 'CSPR',
    firstAmount: '200.00000002',
    secondAmount: '4000000.00000122',
    userUSDLP: '100.00000000',
    userLP: '10.22110000',
    totalUSDLP: '232000',
    totalLP: '232000',
    yourShare: '0.00',
    lpStaked: '0.00',
    apr: '0.99',
    onOptionClick: (option, firstSymbol, secondSymbol) => {
    },
    hasStake: false,
    hasGauge: false
},
    {
        firstTokenIcon: btcToken,
        secondTokenIcon: csprToken,
        isFavorite: true,
        firstSymbol: 'BTC',
        secondSymbol: 'CSPR',
        firstAmount: '0.05',
        secondAmount: '9000000.00000122',
        userUSDLP: '100.00000000',
        userLP: '10.22110000',
        totalUSDLP: '232000',
        totalLP: '232000',
        yourShare: '0.00',
        lpStaked: '0.00',
        contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
        apr: '0.99',
        onOptionClick: (option, firstSymbol, secondSymbol) => {
        },
        hasStake: false,
        hasGauge: false
    },
    {
        firstTokenIcon: usdIcon,
        secondTokenIcon: csprToken,
        isFavorite: true,
        firstSymbol: 'USDT',
        secondSymbol: 'CSPR',
        firstAmount: '50.00000002',
        secondAmount: '4000.00000122',
        userUSDLP: '100.00000000',
        userLP: '10.22110000',
        totalUSDLP: '232000',
        totalLP: '232000',
        yourShare: '0.00',
        lpStaked: '0.00',
        contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
        apr: '0.99',
        onOptionClick: (option, firstSymbol, secondSymbol) => {
        },
        hasStake: false,
        hasGauge: false
    }
]
LPFavorite.args = {
    title: 'My Liquidity',
    networkLink: 'https://testnet.cspr.live/contract-package/',
    lpTokens: LPFavoriteTokens
};

export const HasStake = Template.bind({});
// @ts-ignore
const LPTokensHasStake = [
    {
        contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
        firstTokenIcon: ethToken,
        secondTokenIcon: csprToken,
        isFavorite: false,
        firstSymbol: 'ETH',
        secondSymbol: 'CSPR',
        firstAmount: '200.00000002',
        secondAmount: '4000000.00000122',
        userUSDLP: '100.00000000',
        userLP: '10.22110000',
        totalUSDLP: '232000',
        totalLP: '232000',
        yourShare: '0.00',
        lpStaked: '0.00',
        apr: '0.99',
        onOptionClick: (option, firstSymbol, secondSymbol) => {
        },
        hasStake: true,
        hasGauge: true
    },
    {
        firstTokenIcon: btcToken,
        secondTokenIcon: csprToken,
        isFavorite: false,
        firstSymbol: 'BTC',
        secondSymbol: 'CSPR',
        firstAmount: '0.05',
        secondAmount: '9000000.00000122',
        userUSDLP: '100.00000000',
        userLP: '10.22110000',
        totalUSDLP: '232000',
        totalLP: '232000',
        yourShare: '0.00',
        lpStaked: '0.00',
        contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
        apr: '0.99',
        onOptionClick: (option, firstSymbol, secondSymbol) => {
        },
        hasStake: true,
        hasGauge: true
    },
    {
        firstTokenIcon: usdIcon,
        secondTokenIcon: csprToken,
        isFavorite: false,
        firstSymbol: 'USDT',
        secondSymbol: 'CSPR',
        firstAmount: '50.00000002',
        secondAmount: '4000.00000122',
        userUSDLP: '100.00000000',
        userLP: '10.22110000',
        totalUSDLP: '232000',
        totalLP: '232000',
        yourShare: '0.00',
        lpStaked: '0.00',
        contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
        apr: '0.99',
        onOptionClick: (option, firstSymbol, secondSymbol) => {
        },
        hasStake: true,
        hasGauge: true
    }
]
HasStake.args = {
    title: 'My Liquidity',
    networkLink: 'https://testnet.cspr.live/contract-package/',
    lpTokens: LPTokensHasStake
};

export const HasStakeAndBooleans = Template.bind({});

const LPTokensHasStakeBoleans = [
    {
        contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
        firstTokenIcon: ethToken,
        secondTokenIcon: csprToken,
        isFavorite: false,
        firstSymbol: 'ETH',
        secondSymbol: 'CSPR',
        firstAmount: '200.00000002',
        secondAmount: '4000000.00000122',
        userUSDLP: '100.00000000',
        userLP: '10.22110000',
        totalUSDLP: '232000',
        totalLP: '232000',
        yourShare: '0.00',
        lpStaked: '0.00',
        apr: '0.99',
        onOptionClick: (option, firstSymbol, secondSymbol) => {
        },
        hasStake: true,
        hasGauge: true,
        hasClaimWETH: true,
        hasClaimCST: false,
    },
    {
        firstTokenIcon: btcToken,
        secondTokenIcon: csprToken,
        isFavorite: false,
        firstSymbol: 'BTC',
        secondSymbol: 'CSPR',
        firstAmount: '0.05',
        secondAmount: '9000000.00000122',
        userUSDLP: '100.00000000',
        userLP: '10.22110000',
        totalUSDLP: '232000',
        totalLP: '232000',
        yourShare: '0.00',
        lpStaked: '0.00',
        contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
        apr: '0.99',
        onOptionClick: (option, firstSymbol, secondSymbol) => {
        },
        hasStake: true,
        hasGauge: true,
        hasClaimWETH: true,
        hasClaimCST: true,
    },
    {
        firstTokenIcon: usdIcon,
        secondTokenIcon: csprToken,
        isFavorite: false,
        firstSymbol: 'USDT',
        secondSymbol: 'CSPR',
        firstAmount: '50.00000002',
        secondAmount: '4000.00000122',
        userUSDLP: '100.00000000',
        userLP: '10.22110000',
        totalUSDLP: '232000',
        totalLP: '232000',
        yourShare: '0.00',
        lpStaked: '0.00',
        contractPackage: 'a3f3a7c26a0723f56ad74dcb4d9a86642d1d53c6d1add00c237df5199a3025e6',
        apr: '0.99',
        onOptionClick: (option, firstSymbol, secondSymbol) => {
        },
        hasStake: true,
        hasGauge: true,
        hasClaimWETH: false,
        hasClaimCST: true,
    }
]

HasStakeAndBooleans.args = {
    title: 'My Liquidity',
    networkLink: 'https://testnet.cspr.live/contract-package/',
    lpTokens: LPTokensHasStakeBoleans
};
