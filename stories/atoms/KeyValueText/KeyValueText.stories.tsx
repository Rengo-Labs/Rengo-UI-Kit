import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {KeyValueText} from "../../../src/components";

export default {
    title: "Components/Atoms/KeyValueText",
    component: KeyValueText,
} as ComponentMeta<typeof KeyValueText>;

// Create a master template for mapping args to render the KeyValueText component

const Template: ComponentStory<typeof KeyValueText> = (args) => <KeyValueText {...args} />;
export const Default = Template.bind({});
// @ts-ignore
Default.args = {keyText: 'Swapping Through', valueText: 'CasperSwap Pool'};
