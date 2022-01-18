import React from "react";
import { Story, Meta } from "@storybook/react";
import { Sidebar, SidebarProps } from "./index";

export default {
  title: "Common/ Sidebar",
  component: Sidebar,
} as Meta<SidebarProps>;

const template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Primary = template.bind({});

Primary.args = {};
