import React from "react";
import { Meta, Story } from "@storybook/react";
import { PaperInfo, PaperInfoProps } from "./index";

export default {
  title: "Common/ Paper Information",
  component: PaperInfo,
} as Meta<PaperInfoProps>;

const template: Story<PaperInfoProps> = (args) => <PaperInfo {...args} />;

export const Primary = template.bind({});

Primary.args = {
  title: "Entrada",
  value: "R$ 1.350,00",
};
