import { render, screen } from "@testing-library/react";
import App from "./App";

//smoke test
it("renders without crashing", function () {
  render(<App />);
});

//snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
