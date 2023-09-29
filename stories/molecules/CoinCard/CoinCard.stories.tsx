import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {CoinCard, CoinCardPros} from "../../../src/components";
// @ts-ignore
import ethToken from '../../assets/eth-token.svg';
// @ts-ignore
import csprToken from '../../assets/casper-token.svg';
// @ts-ignore
import downwardsArrowIcon from '../../assets/downwards-arrow-icon.svg'

export default {
    title: "Components/Molecules/CoinCard",
    component: CoinCard,
} as ComponentMeta<typeof CoinCard>;

// Create a master template for mapping args to render the CoinCard component
const Template: ComponentStory<typeof CoinCard> = (args) => <div style={{width: '100%', height: '100%'}}>
    <CoinCard {...args} />
</div>;
export const Default = Template.bind({});
export const UsingCSPR = Template.bind({});
export const UsindDToken = Template.bind({});

export const Disabled = Template.bind({});

// @ts-ignore
Default.args = {
    startIcon:ethToken,
    endIcon:downwardsArrowIcon,
    iconSize:'large',
    title:'To',
    tokenBalance:'20000.000000',
    tokenName:'ETH',
    tokenPrice:'34.33',
    placeholder:'0.000000000',
    onChangeToken:() => {},
    onChangeValue:() => {},
    validator:() => {},
    value: 0,
    gasFee: 20
};

// @ts-ignore
UsingCSPR.args = {
    startIcon:csprToken,
    endIcon:downwardsArrowIcon,
    iconSize:'large',
    title:'To',
    tokenBalance:'20000.000000',
    tokenName:'CSPR',
    tokenPrice:'34.33',
    placeholder:'0.000000000',
    onChangeToken:() => {},
    onChangeValue:() => {},
    validator:() => {},
    value: 0,
    gasFee: 20
};

UsindDToken.args = {
    startIcon:ethToken,
    endIcon:downwardsArrowIcon,
    iconSize:'large',
    title:'To',
    tokenBalance:'20000.000000',
    tokenName:'dWBTC',
    tokenPrice:'34.33',
    placeholder:'0.000000000',
    onChangeToken:() => {},
    onChangeValue:() => {},
    validator:() => {},
    value: 0,
    gasFee: 20
}

Disabled.args = {
    startIcon:ethToken,
    endIcon:downwardsArrowIcon,
    iconSize:'large',
    title:'To',
    tokenBalance:'20000.000000',
    tokenName:'dWBTC',
    tokenPrice:'34.33',
    placeholder:'0.000000000',
    onChangeToken:() => {},
    onChangeValue:() => {},
    validator:() => {},
    value: 0,
    gasFee: 20,
    disabled: true
}
