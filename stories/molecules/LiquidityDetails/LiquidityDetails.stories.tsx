import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {LiquidityDetails} from "../../../src/components";

export default {
    title: "Components/Molecules/LiquidityDetails",
    component: LiquidityDetails,
} as ComponentMeta<typeof LiquidityDetails>;

// Create a master template for mapping args to render the LiquidityDetail component
const Template: ComponentStory<typeof LiquidityDetails> = () => <div style={{width: '600px'}}><LiquidityDetails  /></div>;
export const Default = Template.bind({});

