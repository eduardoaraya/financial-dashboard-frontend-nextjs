import { render, screen } from "@testing-library/react";
import Layout from "./index";

describe(`Component: ${Layout.name}`, () => {
  it("When providing the `title` and the `children` component should be displayed", () => {
    const titlePage = "Home Page";
    const contentPage = "Test content";
    render(
      <Layout titlePage={titlePage}>
        <p>{contentPage}</p>
      </Layout>
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
