import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Column} from "../../../src/components";
import {Container, Row} from "../../../src/components";

export default {
    title: "Components/Atoms/Column",
    component: Column,
    argTypes: {
        textColor: {control: 'color'},
    }
} as ComponentMeta<typeof Column>;

// Create a master template for mapping args to render the Column component
const children = <div>Column</div>;
const Template: ComponentStory<typeof Column> = (args) => (
    <Container>
        <Row>
            <Column {...args}><div>Column 1</div></Column>
            <Column {...args}><div>Column 2</div></Column>
            <Column {...args}><div>Column 3</div></Column>
        </Row>
    </Container>
);
export const Default = Template.bind({});
// @ts-ignore
Default.args = {children, props: {style: {backgroundColor: 'red'}}};
export const Reverse = Template.bind({});
// @ts-ignore
Reverse.args = {children, props: { reverse: true, style: {backgroundColor: 'red'}}};
export const XS = Template.bind({});
// @ts-ignore
XS.args = {children, props: {style: {backgroundColor: 'red'}, xs: true}};
export const SM = Template.bind({});
// @ts-ignore
SM.args = {children, props: {style: {backgroundColor: 'red'}, sm: true}};
export const MD = Template.bind({});
// @ts-ignore
MD.args = {children, props: {style: {backgroundColor: 'red'}, md: true}};
export const LG = Template.bind({});
// @ts-ignore
LG.args = {children, props: {style: {backgroundColor: 'red'}, lg: true}};
export const xsOffset = Template.bind({});
// @ts-ignore
xsOffset.args = {children, props: {style: {backgroundColor: 'red'}, xsOffset: 1, xs: 11}};
export const smOffset = Template.bind({});
// @ts-ignore
smOffset.args = {children, props: {style: {backgroundColor: 'red'}, smOffset: 2, xs: 10}};
export const mdOffset = Template.bind({});
// @ts-ignore
mdOffset.args = {children, props: {style: {backgroundColor: 'red'}, mdOffset: 3, xs: 9}};
export const lgOffset = Template.bind({});
// @ts-ignore
lgOffset.args = {children, props: {style: {backgroundColor: 'red'}, lgOffset: 4, xs: 8}};
