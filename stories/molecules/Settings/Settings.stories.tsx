import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Settings} from "../../../src/components";

export default {
    title: "Components/Molecules/Settings",
    component: Settings,
} as ComponentMeta<typeof Settings>;

// Create a master template for mapping args to render the Settings component
const Template: ComponentStory<typeof Settings> = () => <div style={{width: '500px'}}><Settings  /></div>;
export const Default = Template.bind({});
