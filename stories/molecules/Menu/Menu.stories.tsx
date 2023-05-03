import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Menu} from "../../../src/components";
// @ts-ignore
import ethToken from '../../assets/eth-token.svg';
// @ts-ignore
import tetherToken from '../../assets/tether-token.svg'
// @ts-ignore
import usdcToken from '../../assets/usdc-token.svg'
// @ts-ignore
import casperIcon from '../../assets/casperIcon.svg'
import casperTyped from '../../assets/casper-typed.svg'

export default {
    title: "Components/Molecules/Menu",
    component: Menu,
} as ComponentMeta<typeof Menu>;

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof Menu> = (args) => <div style={{width: '100%', height: '100%'}}>
    <Menu {...args} />
    <div style={{background: 'green', height: '100%'}}/>
</div>;
export const Default = Template.bind({});

const rightAction = {
    startIcon: ethToken,
    title: 'Connect Wallet',
    background: '#7AEDD4',
    color: '#715FF5',
    onAction: () => console.log("Open Right Options"),
    isWalletConnected: false,
    onActionConnected: () => console.log("onActionConnected"),
    walletAddress: null,
}

const rightActionConnected = {
    startIcon: ethToken,
    title: 'Connect Wallet',
    background: '#7AEDD4',
    color: '#715FF5',
    onAction: () => console.log("Open Right Options"),
    isWalletConnected: true,
    onActionConnected: () => console.log("onActionConnected"),
    walletAddress: '01619d815aecaa6be608345dd674543b339ce9fe299f97919dce921afe34dd1a1f'
}

const toggleAction = {
    isActive: 'default',
    toggle: () => {},
    variant: 'theme-switcher'
}
const routes = [
    {icon: ethToken, page: 'SWAP', path: '/swap', action: () => console.log('/swap')},
    {icon: usdcToken, page: "LIQUIDITY", path: '/liquidity', action: () => console.log('/liquidity')},
    {icon: tetherToken, page: "POOL", path: '/pool', action: () => console.log('/pool')}
]

// @ts-ignore
Default.args = {
    title: 'CASPERSWAP',
    casperIcon: casperTyped,
    links: routes,
    menuIcon: casperIcon,
    rightAction: rightAction,
    toggle: toggleAction,
    menuBackground: 'default',
    isWalletConnected: false,
    handleRedirect: () => console.log('handleRedirect')
};
export const WalletConnected = Template.bind({});
WalletConnected.args = {
    title: 'CASPERSWAP',
    casperIcon: casperTyped,
    links: routes,
    menuIcon: casperIcon,
    rightAction: rightActionConnected,
    toggle: toggleAction,
    menuBackground: 'default',
    isWalletConnected: true,
    handleRedirect: () => console.log('handleRedirect')
};
