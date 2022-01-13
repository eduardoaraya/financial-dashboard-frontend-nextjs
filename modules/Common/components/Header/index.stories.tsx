import React from "react";
import { Meta, Story } from "@storybook/react";
import { Header, HeaderProps } from "./index";

export default {
  title: "Common/ Header",
  component: Header,
} as Meta<HeaderProps>;

const template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = template.bind({});

Primary.args = {};
