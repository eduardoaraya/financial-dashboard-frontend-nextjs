import React from "react";
import { Meta, Story } from "@storybook/react";
import MonthWidget, { MonthWidgetProps } from "./index";

export default {
  title: "Common/ MonthWidget",
  component: MonthWidget,
} as Meta<MonthWidgetProps>;

const template: Story<MonthWidgetProps> = (args) => <MonthWidget {...args} />;

export const Primary = template.bind({});

Primary.args = {};
