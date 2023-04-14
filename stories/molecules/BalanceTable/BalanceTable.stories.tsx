import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {BalanceTable} from "../../../src/components";

export default {
    title: "Components/Molecules/BalanceTable",
    component: BalanceTable,
} as ComponentMeta<typeof BalanceTable>;

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof BalanceTable> = () => <div style={{width: '800px'}}><BalanceTable  /></div>;
export const Default = Template.bind({});

