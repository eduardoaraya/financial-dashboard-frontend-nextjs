import React from "react";
import { Story, Meta } from "@storybook/react";
import { Table, TableProps } from "./index";

export default {
  title: "Common/ Table",
  component: Table,
} as Meta<TableProps>;

const template: Story<TableProps> = (args) => <Table {...args} />;

export const Primary = template.bind({});

Primary.args = {};
