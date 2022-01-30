import React from "react";

import CommongContext from "../libs/src/Common/contexts/CommonContext/index";

export const decorators = [
  (Story) => (
    <CommongContext>
      <Story />
    </CommongContext>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
