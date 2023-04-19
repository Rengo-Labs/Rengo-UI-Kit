import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonWallet} from "../../../src/components";

export default {
    title: "Components/Atoms/WalletButton",
    component: ButtonWallet,
    argTypes: {
        handleClick: { type: 'function' },
        accountHashString: { type: 'string' },
    }
}as ComponentMeta<typeof ButtonWallet>

const Template: ComponentStory<typeof ButtonWallet> = (args) => <ButtonWallet {...args} />;
export const Default = Template.bind({});
Default.args = {
    handleClick: () => { console.log('clicked') },
}

export const Connected = Template.bind({});
Connected.args = {
    handleClick: () => { console.log('clicked') },
    accountHashString: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
}
