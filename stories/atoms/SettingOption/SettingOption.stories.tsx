import { ComponentMeta, ComponentStory } from "@storybook/react";
import {SettingOption} from "../../../src/components";

export default {
    title: "Components/Atoms/SettingOption",
    component: SettingOption,
} as ComponentMeta<typeof SettingOption>;

// Create a master template for mapping args to render the SettingOption component
const Template: ComponentStory<typeof SettingOption> = (args) => <SettingOption {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {value: 0.1, handleValue: (value: number) => {console.log(value)}};

export const WithInput = Template.bind({});
// @ts-ignore
WithInput.args = {value: 10, handleValue: (value: number) => { console.log(value) }, input: true};
