import React from "react";
import { render } from "../../tests/test-utils";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders correctly", () => {
    const { baseElement } = render(<Avatar />);
    expect(baseElement).toBeTruthy();
  });
});
