import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Sidebar } from "./index";

export default {
  title: "Common/ Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Primary = template.bind({
  args: {},
});
