import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the hero heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /forecast quality, commit risk, and upside planning in one executive workspace/i
      })
    ).toBeInTheDocument();
  });

  it("renders a deal risk card", () => {
    render(<App />);
    expect(screen.getByText(/northstar cloud/i)).toBeInTheDocument();
  });
});
