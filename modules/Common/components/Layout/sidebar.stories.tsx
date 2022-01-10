import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from "./index";

export default {
  title: "Common/ Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = template.bind({
  args: {},
});
