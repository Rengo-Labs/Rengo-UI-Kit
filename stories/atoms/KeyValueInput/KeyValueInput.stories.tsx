import { ComponentMeta, ComponentStory } from "@storybook/react";
import {KeyValueInput} from "../../../src/components";

export default {
    title: "Components/Atoms/KeyValueInput",
    component: KeyValueInput,
} as ComponentMeta<typeof KeyValueInput>;


// Create a master template for mapping args to render the KeyValueInput component
const Template: ComponentStory<typeof KeyValueInput> = (args) => <KeyValueInput {...args} />;
export const Default = Template.bind({});
// @ts-ignore
Default.args = {keyText: 'Slippage Tolerance', value: 1.4589, inputType: 'GASFEE', onChange: (value: string) => console.log(value)};
