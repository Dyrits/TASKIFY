import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";
import TaskList from "./components/TaskList";
import Input from "./components/Input";

afterEach(cleanup);
describe("existing task-entry behavior", () => {
  it("renders the heading and input, accepts text and submits without navigation", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Taskify" })).toBeInTheDocument();
    const input = screen.getByPlaceholderText("Enter a task~") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Read a book" } });
    expect(input.value).toBe("Read a book");
    fireEvent.click(screen.getByRole("button", { name: "Add" }));
    expect(screen.getByRole("heading", { name: "Taskify" })).toBeInTheDocument();
    // Existing limitation: the task list has not been implemented.
    expect(screen.queryByText("Read a book")).not.toBeInTheDocument();
  });
  it("passes changed text and form submission to the input callbacks", () => {
    const setTask = vi.fn();
    const addTask = vi.fn(event => event.preventDefault());
    render(<Input task="" setTask={setTask} addTask={addTask} />);
    const input = screen.getByPlaceholderText("Enter a task~");
    fireEvent.change(input, { target: { value: "Fixture" } });
    expect(setTask).toHaveBeenCalledWith("Fixture");
    input.focus();
    fireEvent.click(screen.getByRole("button", { name: "Add" }));
    expect(addTask).toHaveBeenCalledTimes(1);
    expect(document.activeElement).not.toBe(input);
  });
  it("keeps the task-list placeholder explicit rather than claiming task rendering", () => {
    const { container } = render(<TaskList tasks={[{ id: 1, task: "Not rendered", isCompleted: false }]} />);
    expect(container.firstElementChild?.childElementCount).toBe(0);
    expect(screen.queryByText("Not rendered")).not.toBeInTheDocument();
  });
});
