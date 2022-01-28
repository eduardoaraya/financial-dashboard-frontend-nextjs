import { render, screen } from "@testing-library/react";
import Sidebar from "./index";
import navigationItems from "./navigationItems";

describe(`Component: ${Sidebar.name}`, () => {
  it.each(navigationItems)(
    "Should displayed navigation item: $title",
    ({ title, icon }) => {
      const iconName = icon.type.type.render.displayName;
      render(<Sidebar />);
      const menuElement = screen.getByText(title);
      const menuIconElement = screen.getByTestId(iconName);
      expect(menuElement).toBeVisible();
      expect(menuIconElement).toBeVisible();
    }
  );
});
