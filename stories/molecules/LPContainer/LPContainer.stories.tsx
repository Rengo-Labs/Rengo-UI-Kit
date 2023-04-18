import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {LPContainer} from "../../../src/components";
// @ts-ignore
import ethToken from '../../assets/eth-token.svg';
// @ts-ignore
import ethCsprIcon from '../../assets/eth-cspr-pair.svg'
// @ts-ignore
import usdIcon from '../../assets/usdc-token.svg'


export default {
    title: "Components/Molecules/LPContainer",
    component: LPContainer,
} as ComponentMeta<typeof LPContainer>;

// Create a master template for mapping args to render the LPContainer component
const Template: ComponentStory<typeof LPContainer> = (args) => <div style={{width: '100%', height: '100%'}}>
    <LPContainer {...args} />
</div>;
export const Default = Template.bind({});
export const LPFavorite = Template.bind({});

// @ts-ignore
Default.args = {
    title: 'My Liquidity',
    lpTokens: [
        {icon: ethToken, isFavorite: false, firstSymbol: 'ETH', secondSymbol: 'CSPR', firstAmount: '200.00000002', secondAmount: '4000000.00000122', userLP: '10', totalLP: '232000', onOptionClick: (option, firstSymbol, secondSymbol) => {}},
        {icon: ethCsprIcon, isFavorite: false, firstSymbol: 'BTC', secondSymbol: 'CSPR', firstAmount: '0.05', secondAmount: '9000000.00000122', userLP: '1.02', totalLP: '34000', onOptionClick: (option, firstSymbol, secondSymbol) => {}},
        {icon: usdIcon, isFavorite: false, firstSymbol: 'USDT', secondSymbol: 'CSPR', firstAmount: '50.00000002', secondAmount: '4000.00000122', userLP: '19', totalLP: '23000', onOptionClick: (option, firstSymbol, secondSymbol) => {}},
    ]
};

// @ts-ignore
LPFavorite.args = {
    title: 'My Liquidity',
    lpTokens: [
        {icon: ethToken, isFavorite: true, firstSymbol: 'ETH', secondSymbol: 'CSPR', firstAmount: '200.00000002', secondAmount: '4000000.00000122', userLP: '10', totalLP: '232000', onOptionClick: (option, firstSymbol, secondSymbol) => {}},
        {icon: ethCsprIcon, isFavorite: true, firstSymbol: 'BTC', secondSymbol: 'CSPR', firstAmount: '0.05', secondAmount: '9000000.00000122', userLP: '1.02', totalLP: '34000', onOptionClick: (option, firstSymbol, secondSymbol) => {}},
        {icon: usdIcon, isFavorite: true, firstSymbol: 'USDT', secondSymbol: 'CSPR', firstAmount: '50.00000002', secondAmount: '4000.00000122', userLP: '19', totalLP: '23000', onOptionClick: (option, firstSymbol, secondSymbol) => {}},
    ]
};