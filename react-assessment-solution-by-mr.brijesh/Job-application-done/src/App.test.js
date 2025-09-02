import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Job Application Portal", () => {
  test("1. Shows validation errors for empty fields", () => {
    render(<App />);
    fireEvent.click(screen.getByTestId("preview-button"));
    expect(screen.getByTestId("error-name")).toHaveTextContent(
      "Name is required."
    );
    expect(screen.getByTestId("error-email")).toHaveTextContent(
      "Enter a valid email address."
    );
    expect(screen.getByTestId("error-experience")).toHaveTextContent(
      "Experience must be a positive number."
    );
  });

  test("2. Shows validation error for invalid email format", () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("input-email"), {
      target: { value: "invalid-email" },
    });
    fireEvent.click(screen.getByTestId("preview-button"));
    expect(screen.getByTestId("error-email")).toHaveTextContent(
      "Enter a valid email address."
    );
  });

  test("3. Shows validation error for non-positive experience", () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("input-experience"), {
      target: { value: "-5" },
    });
    fireEvent.click(screen.getByTestId("preview-button"));
    expect(screen.getByTestId("error-experience")).toHaveTextContent(
      "Experience must be a positive number."
    );
  });

  test("4. Reset button clears all fields and errors", () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("input-name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByTestId("input-email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByTestId("input-experience"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByTestId("reset-button"));
    expect(screen.getByTestId("input-name").value).toBe("");
    expect(screen.getByTestId("input-email").value).toBe("");
    expect(screen.getByTestId("input-experience").value).toBe("");
    expect(screen.queryByTestId("error-name")).not.toBeInTheDocument();
  });

  test("5. Preview displays the entered data", () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("input-name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByTestId("input-email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByTestId("input-experience"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByTestId("preview-button"));
    expect(screen.getByTestId("preview")).toBeInTheDocument();
    expect(screen.getByTestId("preview-name")).toHaveTextContent("John Doe");
    expect(screen.getByTestId("preview-email")).toHaveTextContent(
      "john.doe@example.com"
    );
    expect(screen.getByTestId("preview-experience")).toHaveTextContent(
      "5 years"
    );
  });

  test("6. Clear button in preview returns to form with data cleared", () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("input-name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByTestId("input-email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByTestId("input-experience"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByTestId("preview-button"));
    fireEvent.click(screen.getByTestId("clear-button"));
    expect(screen.getByTestId("job-application-form")).toBeInTheDocument();
    expect(screen.getByTestId("input-name").value).toBe("");
    expect(screen.getByTestId("input-email").value).toBe("");
    expect(screen.getByTestId("input-experience").value).toBe("");
  });

  test("7. Submit button in preview shows success message", () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("input-name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByTestId("input-email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByTestId("input-experience"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByTestId("preview-button"));
    fireEvent.click(screen.getByTestId("submit-button"));
    expect(screen.getByTestId("success-message")).toBeInTheDocument();
  });

  test("8. Home button in success message clears state and returns to form", () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("input-name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByTestId("input-email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByTestId("input-experience"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByTestId("preview-button"));
    fireEvent.click(screen.getByTestId("submit-button"));
    fireEvent.click(screen.getByTestId("reset-button"));
    expect(screen.getByTestId("job-application-form")).toBeInTheDocument();
    expect(screen.getByTestId("input-name").value).toBe("");
    expect(screen.getByTestId("input-email").value).toBe("");
    expect(screen.getByTestId("input-experience").value).toBe("");
  });
});
