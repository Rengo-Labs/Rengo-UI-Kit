import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Container} from "../../../src/components";

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
export const Default = Template.bind({});
// @ts-ignore
Default.args = { "xs": 12};
