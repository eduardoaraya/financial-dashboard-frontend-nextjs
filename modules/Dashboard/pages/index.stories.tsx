import React from "react";
import { Meta, Story } from "@storybook/react";
import { DashboardPage, DashboardPageProps } from "./index";

export default {
  title: "Dashboard/ Index",
  component: DashboardPage,
} as Meta<DashboardPageProps>;

const template: Story<DashboardPageProps> = (args) => (
  <DashboardPage {...args} />
);

export const Primary = template.bind({});

Primary.args = {};
