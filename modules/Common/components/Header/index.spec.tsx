import Header from "./index";
import { render, screen } from "@testing-library/react";

describe(`Component: ${Header.name}`, () => {
  it(`When providing the it avatarPhoto should set profile picture`, () => {
    const avatarPhoto = "image.png";
    render(<Header avatarPhoto={avatarPhoto} />);
    const imageProfile = screen.getByAltText("Profile");
    expect(imageProfile).toBeVisible();
    expect(imageProfile.getAttribute("src")).toBe(avatarPhoto);
  });

  it(`When not providing the it avatarPhoto should set default icon`, () => {
    render(<Header />);
    const personIcon = screen.getByTestId("PersonIcon");
    expect(personIcon).toBeVisible();
  });
});
