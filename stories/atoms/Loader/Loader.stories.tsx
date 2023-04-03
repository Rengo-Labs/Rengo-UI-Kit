import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Loader} from "../../../src/components";

export default {
    title: "Components/Atoms/Loader",
    component: Loader,
} as ComponentMeta<typeof Loader>;

// Create a master template for mapping args to render the Loader component
const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;
export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
