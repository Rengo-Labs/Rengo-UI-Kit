import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {BalanceTable} from "../../../src/components";
import { BALANCE_TABLE_DATA } from '../../../example/src/data';

export default {
    title: "Components/Molecules/BalanceTable",
    component: BalanceTable,
} as ComponentMeta<typeof BalanceTable>;

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof BalanceTable> = () => <div style={{width: '800px'}}><BalanceTable data={BALANCE_TABLE_DATA} /></div>;
export const Default = Template.bind({});

