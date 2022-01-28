import { render, screen } from "@testing-library/react";
import Main from "./index";

describe(`Component: ${Main.name}`, () => {
  it("When providing the `title` and the `children` component should be displayed", () => {
    const titlePage = "Home Page";
    const contentPage = "Test content";
    render(
      <Main title={titlePage}>
        <p>{contentPage}</p>
      </Main>
    );

    const titlePageElement = screen.getByText(titlePage, {
      selector: "h5",
    });

    const contentParagraph = screen.getByText(contentPage, {
      selector: "p",
    });

    expect(titlePageElement).toBeVisible();
    expect(contentParagraph).toBeVisible();
  });
});
