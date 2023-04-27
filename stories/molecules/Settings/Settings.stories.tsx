import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Settings} from "../../../src/components";

export default {
    title: "Components/Molecules/Settings",
    component: Settings,
} as ComponentMeta<typeof Settings>;

// Create a master template for mapping args to render the Settings component
const Template: ComponentStory<typeof Settings> = (args) => <div style={{width: '500px'}}><Settings {...args} /></div>;
export const Default = Template.bind({});
Default.args = {
    slippageToleranceValue: 0.1,
    customNodeUrlValue: 'testnet.casperlabs.io',
    handleSave: (slippage: number, node: string ) => console.log('Save', slippage, node),
    handleClose: () => console.log('Close'),
    isOpen: true
}
