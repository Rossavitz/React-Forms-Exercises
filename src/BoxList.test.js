import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BoxList from "./BoxList";

// smoke test
it("renders without crashing", function () {
  render(<BoxList />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function () {
  render(<BoxList />);
  const heightInput = screen.queryByLabelText("Height:");
  const widthInput = screen.queryByLabelText("Width:");
  const bgInput = screen.queryByLabelText("Background Color:");
  const btn = screen.queryByText("Add Box!");
  expect(screen.queryByText("X!")).not.toBeInTheDocument();
  fireEvent.change(heightInput, { target: { value: 10 } });
  fireEvent.change(widthInput, { target: { value: 10 } });
  fireEvent.change(bgInput, { target: { value: "red" } });
  fireEvent.click(btn);
  const removeBtn = screen.queryByText("X!");
  expect(removeBtn).toBeInTheDocument();
});

it("should remove a box", function () {
  render(<BoxList />);
  const heightInput = screen.queryByLabelText("Height:");
  const widthInput = screen.queryByLabelText("Width:");
  const bgInput = screen.queryByLabelText("Background Color:");
  const btn = screen.queryByText("Add Box!");
  expect(screen.queryByText("X!")).not.toBeInTheDocument();
  fireEvent.change(heightInput, { target: { value: 10 } });
  fireEvent.change(widthInput, { target: { value: 10 } });
  fireEvent.change(bgInput, { target: { value: "red" } });
  fireEvent.click(btn);
  const removeBtn = screen.queryByText("X!");
  expect(removeBtn).toBeInTheDocument();
  fireEvent.click(removeBtn);
  expect(removeBtn).not.toBeInTheDocument();
});
