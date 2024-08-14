import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import Todo from "./Todo";

// smoke test
it("renders without crashing", function () {
  render(<TodoList />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a todo", function () {
  render(<TodoList />);
  const input = screen.queryByLabelText("Add Todo:");
  const btn = screen.queryByText("Add Todo");
  expect(screen.queryByText("walk dogs")).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: "walk dogs" } });
  fireEvent.click(btn);
  expect(screen.getByText("walk dogs")).toBeInTheDocument();
});

it("should delete a todo", function () {
  render(<TodoList />);
  const input = screen.queryByLabelText("Add Todo:");
  const btn = screen.queryByText("Add Todo");
  expect(screen.queryByText("walk dogs")).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: "walk dogs" } });
  fireEvent.click(btn);
  expect(screen.getByText("walk dogs")).toBeInTheDocument();
  const removeBtn = screen.queryByText("x");
  fireEvent.click(removeBtn);
  expect(screen.queryByText("walk dogs")).not.toBeInTheDocument();
});
