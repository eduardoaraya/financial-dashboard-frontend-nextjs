import React from "react";

import CommongContext from "../modules/Common/contexts/CommonContext";

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
