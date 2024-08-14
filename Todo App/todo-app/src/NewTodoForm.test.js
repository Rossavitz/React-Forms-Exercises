import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

// smoke test
it("renders without crashing", function () {
  render(<NewTodoForm />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("runs addTodo on form submit", function () {
  const createMock = jest.fn();
  render(<NewTodoForm addTodo={createMock} />);
  const createButton = screen.getByText("Add Todo");
  fireEvent.click(createButton);
  expect(createMock).toHaveBeenCalled();
});
