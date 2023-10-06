import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoaderSmall } from "../../../src/components";

export default {
    title: "Components/Atoms/LoaderSmall",
    component: LoaderSmall,
} as ComponentMeta<typeof LoaderSmall>;

// Create a master template for mapping args to render the Loader component
const Template: ComponentStory<typeof LoaderSmall> = (args) => <LoaderSmall />;
export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
