import React from "react";
import { Meta, Story } from "@storybook/react";
import { Layout, LayoutProps } from "./index";

export default {
  title: "Common/ Layout",
  component: Layout,
} as Meta<LayoutProps>;

const template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Primary = template.bind({});
