import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

const TEST_IDS = {
  firstNameInput: "firstNameInput",
  lastNameInput: "lastNameInput",
  emailInput: "emailInput",
  changeButton: "changeButton",
  firstNameDiv: "firstNameDiv",
  lastNameDiv: "lastNameDiv",
  emailDiv: "emailDiv",
};

describe("React Edit Profile", () => {
  let getByTestId;
  let queryByTestId;
  let firstNameInput;
  let lastNameInput;
  let emailInput;
  let changeButton;
  let firstNameDiv;
  let lastNameDiv;
  let emailDiv;

  beforeEach(() => {
    const app = render(<App />);
    getByTestId = app.getByTestId;
    queryByTestId = app.queryByTestId;
    firstNameDiv = getByTestId(TEST_IDS.firstNameDiv);
    lastNameDiv = getByTestId(TEST_IDS.lastNameDiv);
    emailDiv = getByTestId(TEST_IDS.emailDiv);
    changeButton = getByTestId(TEST_IDS.changeButton);
  });

  afterEach(() => {
    cleanup();
  });

  it("should initially have 3 divs with the specified values", () => {
    expect(firstNameDiv).toHaveTextContent("Sherlock");
    expect(lastNameDiv).toHaveTextContent("Holmes");
    expect(emailDiv).toHaveTextContent("sherlockholmes@email.com");
  });

  it("should initially have no input fields", () => {
    firstNameInput = queryByTestId(TEST_IDS.firstNameInput);
    lastNameInput = queryByTestId(TEST_IDS.lastNameInput);
    emailInput = queryByTestId(TEST_IDS.emailInput);

    expect(firstNameInput).toBeNull();
    expect(lastNameInput).toBeNull();
    expect(emailInput).toBeNull();
  });

  describe("after initial button click", () => {
    it("button should have the text Save Changes after click", () => {
      fireEvent.click(changeButton);
      expect(changeButton).toHaveTextContent("Save Changes");
    });

    it("should display input fields", () => {
      fireEvent.click(changeButton);
      firstNameInput = queryByTestId(TEST_IDS.firstNameInput);
      lastNameInput = queryByTestId(TEST_IDS.lastNameInput);
      emailInput = queryByTestId(TEST_IDS.emailInput);

      expect(firstNameInput).not.toBeNull();
      expect(lastNameInput).not.toBeNull();
      expect(emailInput).not.toBeNull();
    });

    it("should not display the 3 divs", () => {
      fireEvent.click(changeButton);

      firstNameDiv = queryByTestId(TEST_IDS.firstNameDiv);
      lastNameDiv = queryByTestId(TEST_IDS.lastNameDiv);
      emailDiv = queryByTestId(TEST_IDS.emailDiv);

      expect(firstNameDiv).toBeNull();
      expect(lastNameDiv).toBeNull();
      expect(emailDiv).toBeNull();
    });
  });

  describe("values after editing", () => {
    const data = {
      firstName: "John",
      lastName: "Legend",
      email: "john@email.com",
    };
    it("should have the correct input details after editing", () => {
      const alertMock = jest.spyOn(window, "alert").mockImplementation();

      fireEvent.click(changeButton);

      firstNameInput = getByTestId(TEST_IDS.firstNameInput);
      lastNameInput = getByTestId(TEST_IDS.lastNameInput);
      emailInput = getByTestId(TEST_IDS.emailInput);

      fireEvent.change(firstNameInput, { target: { value: data.firstName } });
      fireEvent.change(lastNameInput, { target: { value: data.lastName } });
      fireEvent.change(emailInput, { target: { value: data.email } });
      fireEvent.click(changeButton);

      expect(alertMock).toHaveBeenCalledWith("Profile updated successfully");

      firstNameDiv = getByTestId(TEST_IDS.firstNameDiv);
      lastNameDiv = getByTestId(TEST_IDS.lastNameDiv);
      emailDiv = getByTestId(TEST_IDS.emailDiv);

      expect(firstNameDiv).toHaveTextContent(data.firstName);
      expect(lastNameDiv).toHaveTextContent(data.lastName);
      expect(emailDiv).toHaveTextContent(data.email);
    });
    it("button should have the text Edit Profile", () => {
      expect(changeButton).toHaveTextContent("Edit Profile");
    });

    it("should not update any field and should alert if any input field is empty", () => {
      const alertMock = jest.spyOn(window, "alert").mockImplementation();

      fireEvent.click(changeButton);

      firstNameInput = getByTestId(TEST_IDS.firstNameInput);
      lastNameInput = getByTestId(TEST_IDS.lastNameInput);
      emailInput = getByTestId(TEST_IDS.emailInput);

      fireEvent.change(firstNameInput, { target: { value: "" } });
      fireEvent.change(lastNameInput, { target: { value: "" } });
      fireEvent.change(emailInput, { target: { value: "john@email.com" } });
      fireEvent.click(changeButton);

      firstNameDiv = queryByTestId(TEST_IDS.firstNameDiv);
      lastNameDiv = queryByTestId(TEST_IDS.lastNameDiv);
      emailDiv = queryByTestId(TEST_IDS.emailDiv);

      expect(firstNameDiv).toBeNull();
      expect(lastNameDiv).toBeNull();
      expect(emailDiv).toBeNull();

      expect(alertMock).toHaveBeenCalledWith("Please enter all profile fields");
    });
  });
});
