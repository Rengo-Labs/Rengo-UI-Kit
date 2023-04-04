import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Tabs} from "../../../src/components";

export default {
    title: "Components/Atoms/Tabs",
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

// Create a master template for mapping args to render the Tabs component
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;
export const Default = Template.bind({});
// @ts-ignore
Default.args = {
    tabs: [
        {
            id: 1,
            text: 'Price',
            isActive: true
        },
        {
            id: 2,
            text: 'More Info',
            isActive: false
        }
    ],
    onClick: (tab: number) => { console.log(tab); return tab; }
};
