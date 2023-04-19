import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {ContainerLayout, Row, Column} from "../../../src";

export default {
    title: "Components/Atoms/ContainerLayout",
    component: ContainerLayout,
    argTypes: {}
} as ComponentMeta<typeof ContainerLayout>;

// Create a master template for mapping args to render the ContainerLayout component
const Template: ComponentStory<typeof ContainerLayout> = (args) => <ContainerLayout {...args} />;
export const Default = Template.bind({});
// @ts-ignore
Default.args = {
    className: 'p-0 m-0',
    children: (
            <Row>
                <Column props={{ xs: 12 }}>
                    <h1>Container Layout</h1>
                </Column>
            </Row>
    )
};
