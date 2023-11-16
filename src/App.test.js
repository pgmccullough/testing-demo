import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom' // provides .toBeInTheDocument()
import { App } from "./App";

describe("App renders children", () => {
  test("App renders header", () => {
    render(<App />);
    const headerElement = screen.getByText(/my contacts/i);
    expect(headerElement).toBeInTheDocument();
  });
  test("App renders NewPostForm", () => {
    render(<App />);
    const newPostFormElement = screen.getByText("Add Contact");
    expect(newPostFormElement).toBeInTheDocument();
  });
})

