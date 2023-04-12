import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RowIcon } from "../../../src/components";
import { IconSize, RowIconProps } from "../../../src/components/atoms/RowIcon/types";
import cstTokenIcon from "../../../src/assets/icons/casper-token.svg";

export default {
  title: "Components/Atoms/RowIcon",
  component: RowIcon,
} as ComponentMeta<typeof RowIcon>;

// Create a master template for mapping args to render the RowIcon component
const Template: ComponentStory<typeof RowIcon> = (args: RowIconProps) => {
  return (
      <RowIcon {...args} />
  )
};

export const Default = Template.bind({});
Default.args = {
  tokenName: 'CST',
  tokenFullName: 'CasperSwap',
  iconPath: cstTokenIcon,
  iconSize: IconSize.Small
};
