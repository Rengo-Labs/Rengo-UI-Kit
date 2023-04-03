import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Row} from "../../../src/components";
import {Container} from "../../../src/components";

export default {
    title: "Components/Atoms/Row",
    component: Row,
} as ComponentMeta<typeof Row>;

// Create a master template for mapping args to render the Row component
const Template: ComponentStory<typeof Row> = (args) => (
    <Container>
        <Row {...args}>
            <div>Column 1</div>
            <div>Column 2</div>
            <div>Column 3</div>
        </Row>
    </Container>
);
export const Default = Template.bind({});
Default.args = {props: {style: {backgroundColor: 'red'}}, children: 'Row'};
export const Reverse = Template.bind({});
Reverse.args = {props: {style: {backgroundColor: 'red'}, reverse: true}, children: 'Row'};
export const Start = Template.bind({});
Start.args = {props: {style: {backgroundColor: 'red'}, start: 'lg'}, children: 'Row'};
export const Center = Template.bind({});
Center.args = {props: {style: {backgroundColor: 'red'}, center: 'lg'}, children: 'Row'};
export const End = Template.bind({});
End.args = {props: {style: {backgroundColor: 'red'}, end: 'lg'}, children: 'Row'};
export const Top = Template.bind({});
Top.args = {props: {style: {backgroundColor: 'red'}, top: 'lg'}, children: 'Row'};
export const Middle = Template.bind({});
Middle.args = {props: {style: {backgroundColor: 'red'}, middle: 'lg'}, children: 'Row'};
export const Bottom = Template.bind({});
Bottom.args = {props: {style: {backgroundColor: 'red'}, bottom: 'lg'}, children: 'Row'};
export const Around = Template.bind({});
Around.args = {props: {style: {backgroundColor: 'red'}, around: 'lg'}, children: 'Row'};
export const Between = Template.bind({});
Between.args = {props: {style: {backgroundColor: 'red'}, between: 'lg'}, children: 'Row'};
export const First = Template.bind({});
First.args = {props: {style: {backgroundColor: 'red'}, first: 'lg'}, children: 'Row'};
export const Last = Template.bind({});
Last.args = {props: {style: {backgroundColor: 'red'}, last: 'lg'}, children: 'Row'};
