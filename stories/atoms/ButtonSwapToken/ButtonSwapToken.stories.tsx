import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonSwapToken } from "../../../src/components";
export default {
    title: "Components/Atoms/ButtonSwapToken",
    component: ButtonSwapToken,
} as ComponentMeta<typeof ButtonSwapToken>;
const Template: ComponentStory<typeof ButtonSwapToken> = (args) => (
    <ButtonSwapToken {...args} />
);
export const Default = Template.bind({});
Default.args = {
    handleClick: () => { console.log("click");}
}
