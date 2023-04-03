import { ComponentMeta, ComponentStory } from "@storybook/react";
import {KeyPairText} from "../../../src/components";

export default {
    title: "Components/Atoms/KeyPairText",
    component: KeyPairText,
} as ComponentMeta<typeof KeyPairText>;

// Create a master template for mapping args to render the KeyPairText component
const Template: ComponentStory<typeof KeyPairText> = (args) => <KeyPairText {...args} />;
export const Default = Template.bind({});
// @ts-ignore
Default.args = {keyText: 'Price', pairText: 1.4589, isPorcentage: true};
