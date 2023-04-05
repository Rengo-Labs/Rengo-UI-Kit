import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Slider} from "../../../src/components";

export default {
    title: "Components/Atoms/Slider",
    component: Slider,
} as ComponentMeta<typeof Slider>;

// Create a master template for mapping args to render the Slider component
const Template: ComponentStory<typeof Slider> = (args) => <div style={{ width: '500px'}}><Slider {...args} /></div>;
export const Default = Template.bind({});
// @ts-ignore
Default.args = {callback: (selectedPercentage) => {console.log(selectedPercentage)}};
