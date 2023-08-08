import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { GeolocationMessage } from "../../../src/components";

export default {
    title: "Components/Atoms/GeolocationMessage",
    component: GeolocationMessage,
} as ComponentMeta<typeof GeolocationMessage>;

const Template: ComponentStory<typeof GeolocationMessage> = (args) => <GeolocationMessage {...args} />;
export const Default = Template.bind({});
Default.args = {}
