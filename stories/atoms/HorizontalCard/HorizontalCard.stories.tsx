import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {HorizontalCard} from "../../../src/components";
import {HorizontalCardProps} from "../../../src/components/atoms/HorizontalCard/types";
// import ethCsprPair from '../../../example/src/assets/eth-cspr-pair.svg'


export default {
  title: "Components/HorizontalCard",
  component: HorizontalCard,
} as ComponentMeta<typeof HorizontalCard>;

// Create a master template for mapping args to render the HorizontalCard component
const Template: ComponentStory<typeof HorizontalCard> = (args: HorizontalCardProps) => {
  return (
    <HorizontalCard {...args} />
  )
};
export const HorizontalCardDefault = Template.bind({});
// @ts-ignore
// Default.args = { "label": "test" };
