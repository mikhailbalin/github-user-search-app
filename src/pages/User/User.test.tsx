import { render } from "../../tests/test-utils";
import { User } from "./User";

describe("User", () => {
  it("renders correctly", () => {
    const { baseElement } = render(<User />);
    expect(baseElement).toBeTruthy();
  });
});
