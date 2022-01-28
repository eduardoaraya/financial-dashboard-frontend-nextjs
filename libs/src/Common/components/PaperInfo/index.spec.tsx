import { render, screen } from "@testing-library/react";
import PaperInfo from "./index";

describe(`Component: ${PaperInfo.name}`, () => {
  it(`When provided paramters title and value should be visible in the document`, () => {
    const title = "test title";
    const value = "test value";

    render(<PaperInfo title={title} value={value} />);
    const elementTitleText = screen.getByText(title);
    const elementValueText = screen.getByText(value);

    expect(elementTitleText).toBeInTheDocument();
    expect(elementTitleText).toBeVisible();

    expect(elementValueText).toBeInTheDocument();
    expect(elementValueText).toBeVisible();
  });
});
