import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Icons, MyAccountInfoTable, MyAccountInfoTableProps } from "../../../src/components";

export default {
    title: "Components/Molecules/MyAccountInfoTable",
    component: MyAccountInfoTable,
} as ComponentMeta<typeof MyAccountInfoTable>;

// Create a master template for mapping args to render the MyAccountInfoTable component
const Template: ComponentStory<typeof MyAccountInfoTable> = (args: MyAccountInfoTableProps) => <MyAccountInfoTable {...args} />
export const Default = Template.bind({});

const data = [
  {
    key: 'Public Key',
    type: 'string',
    value: '012b3f7ce076dadc870a79067fa352467bc3566578046863107e8000366d67f525'
  },
  {
    key: 'Account Hash',
    type: 'string',
    value: 'af6020ca609a800a04cbbba8d36b977032237e2ed3f3d503fa348a74f86b5426'
  },
  {
    key: 'Total reward received',
    type: 'string',
    value: '0.00000 CSPR ($0.00)'
  },
  {
    key: 'Delegated Participation',
    type: 'string',
    value: '10,860.00000 CSPR ($418.05)'
  },
  {
    key: 'Total Balance',
    type: 'string',
    value: '10,860.00000 CSPR ($418.05)'
  },
  {
    key: 'Liquidity',
    type: 'string',
    value: '0.00000 CSPR ($0.00)'
  },
  {
    key: 'In Rescue',
    type: 'string',
    value: '0.00000 CSPR ($0.00)'
  }
]

Default.args = {
  data
};