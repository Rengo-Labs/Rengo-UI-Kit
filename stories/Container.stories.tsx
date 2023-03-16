import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Container from "./";

export default {
    title: "Components/Container",
    component: Container,
    argTypes: {
        textColor: { control: 'color' },
    },
} as ComponentMeta<typeof Container>;

// Create a master template for mapping args to render the Container component
const children = <div>Container</div>;
const Template: ComponentStory<typeof Container> = (args) => <Container {...args}>{children}</Container>;
export const xs = Template.bind({});
// @ts-ignore
xs.args = { "xs": 12};
