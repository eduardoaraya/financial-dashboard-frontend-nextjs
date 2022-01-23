import React from "react";
import { Meta, Story } from "@storybook/react";
import MainContent, { MainContentProps } from "./index";

export default {
  title: "Common/ Main Content",
  component: MainContent,
} as Meta<MainContentProps>;

const template: Story<MainContentProps> = (args) => <MainContent {...args} />;

export const Primary = template.bind({});

Primary.args = {
  title: "Main content title",
};
