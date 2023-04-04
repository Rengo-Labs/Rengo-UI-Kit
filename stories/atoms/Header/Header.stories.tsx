import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Header} from "../../../src/components";

export default {
    title: "Components/Atoms/Header",
    component: Header,
} as ComponentMeta<typeof Header>;

// Create a master template for mapping args to render the Header component
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;
export const Default = Template.bind({});
// @ts-ignore
Default.args = {text: 'Header', balance: '0.00'};
