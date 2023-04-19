import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonUpdateCircle } from "../../../src/components";

export default {
    title: "Components/Atoms/ButtonUpdateCircle",
    component: ButtonUpdateCircle,
} as ComponentMeta<typeof ButtonUpdateCircle>;
const Template: ComponentStory<typeof ButtonUpdateCircle> = (args) => <ButtonUpdateCircle {...args} />;
export const Default = Template.bind({});
Default.args = {
    getProgress: () => 270,
    clearProgress: () => {},
    strokeWidth: 12,
    handler: () => Promise.resolve()
}
