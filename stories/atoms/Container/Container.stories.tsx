import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Container} from "../../../src/components";
import {Row} from "../../../lib";
import {Col} from "react-styled-flexboxgrid";

export default {
    title: "Components/Atom/Container",
    component: Container,
    argTypes: {
        textColor: { control: 'color' },
    },
} as ComponentMeta<typeof Container>;

// Create a master template for mapping args to render the Container component
const children = <div>Container</div>;
const Template: ComponentStory<typeof Container> = (args) => (
    <Container {...args}>
        <Row>
            <Col xs={12} sm={6} md={4} lg={3}>
                {children}
            </Col>
        </Row>
    </Container>);
export const Default = Template.bind({});
// @ts-ignore
Default.args = { children, props: { style: {backgroundColor: 'red'}}};
export const Fluid = Template.bind({});
// @ts-ignore
Fluid.args = { children, props: {fluid: true, style: {backgroundColor: 'red'}}};
