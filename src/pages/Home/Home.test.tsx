import { fireEvent, render, screen } from "../../tests/test-utils";
import { Home } from "./Home";

describe("Home", () => {
  const setup = () => {
    const utils = render(<Home />);
    const input = screen.getByPlaceholderText<HTMLInputElement>(/search/i);
    return {
      input,
      ...utils,
    };
  };

  it("renders correctly", () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeTruthy();
  });

  it("should allow a user to search", async () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "mikhailbalin" } });
    expect(input.value).toBe("mikhailbalin");

    fireEvent.click(await screen.findByTitle("Search"));

    expect(await screen.findByText(/Misha Balin/i)).toBeInTheDocument();
    expect(await screen.findByText(/mikhailbalin/i)).toBeInTheDocument();
  });
});
