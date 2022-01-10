import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "./index";

export default {
  title: "Common/ Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = template.bind({
  args: {},
});
