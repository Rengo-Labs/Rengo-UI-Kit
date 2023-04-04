import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icons, iconNames } from "../../../src/components";

const names = iconNames.map((name) => name)
export default {
    title: "Components/Atoms/Icons",
    component: Icons,
    argTypes: {
        color: { control: 'color' },
        name: { control: 'select', defaultValue: 'Activity', options: names },
        size: { control: 'number' }
    }
    // @ts-ignore
} as ComponentMeta<typeof Icons>;

// Create a master template for mapping args to render the Icons component
// @ts-ignore
const Template: ComponentStory<typeof Icons> = (args) => {
    return (
        // @ts-ignore
        <Icons {...args} />
    )
}

export const iconList = names.map((icon) => {
    const iconBuild = Template.bind({});
    iconBuild.args = {
        name: icon,
        color: 'Blue',
        size: 24
    }
    return iconBuild
})

iconList.forEach((icon) => {
    const { name }: any = icon.args
    icon.storyName = name
})
