import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Button} from "../../../src/components";

export default {
    title: "Components/Atoms/Button",
    component: Button,
    argTypes: {
        textColor: {control: 'color'},
    },
} as ComponentMeta<typeof Button>;

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Small = Template.bind({});
// @ts-ignore
Small.args = {type: "small", children: "max"};
export const Large = Template.bind({});
Large.args = {type: "large", children: "Swap"};
export const LargeDisable = Template.bind({});
LargeDisable.args = {
    type: "large",
    children: "Swap",
    props: {
        disabled: true,
        onClick: () => {
            console.log('click')
        }
    }
};
