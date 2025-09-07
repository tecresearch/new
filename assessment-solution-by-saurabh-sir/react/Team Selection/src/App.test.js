import React from "react";
import App from "./App";
import { render, cleanup, fireEvent } from "@testing-library/react";
import players from "./players.json";
import "@testing-library/jest-dom/extend-expect";

const AVAILABLE_PLAYERS = players.length;
let selectedPlayers = [];
const randomIds = [10, 12, 1, 3, 4];

const testIds = {
  availablePlayersName: "available-players-name",
  availablePlayersRole: "available-players-role",
  availablePlayersBat: "available-players-bat",
  availablePlayersBowl: "available-players-bowl",
  availablePlayersTableBody: "available-players-table-body",
  availablePlayersRow: "available-players-row",
  selectedPlayersName: "selected-players-name",
  selectedPlayersRole: "selected-players-role",
  selectedPlayersTableBody: "selected-players-table-body",
  selectedPlayersRow: "selected-players-row",
};

afterEach(() => {
  cleanup();
});

let app,
  getByTestId,
  queryByTestId,
  getByText,
  availablePlayersTableBody,
  selectedPlayersTableBody;
beforeEach(() => {
  app = render(<App />);
  getByTestId = app.getByTestId;
  queryByTestId = app.queryByTestId;
  getByText = app.getByText;
  availablePlayersTableBody = getByTestId(testIds.availablePlayersTableBody);
  selectedPlayersTableBody = getByTestId(testIds.selectedPlayersTableBody);
});

it("Initially Selected players should be empty, all 17 players getting rendered in Available Players", () => {
  expect(availablePlayersTableBody.children.length).toBe(17);
  expect(selectedPlayersTableBody.children.length).toBe(0);
  expect(true);
});

it("Select first player in Available Players", () => {
  let playerButton = getByTestId(
    `available-${players[0]["name"].split(" ").join("-")}-select`
  );
  fireEvent.click(playerButton);
  expect(selectedPlayersTableBody.children.length).toBe(1);
  expect(selectedPlayersTableBody.children[0].children[0].textContent).toBe(
    players[0]["name"]
  );
  expect(playerButton).toBeDisabled();
});

it("Remove Selected player", () => {
  let playerButton = getByTestId(
    `available-${players[0]["name"].split(" ").join("-")}-select`
  );
  fireEvent.click(playerButton);
  expect(selectedPlayersTableBody.children.length).toBe(1);
  expect(selectedPlayersTableBody.children[0].children[0].textContent).toBe(
    players[0]["name"]
  );
  expect(playerButton).toBeDisabled();

  let playerRemoveButton = getByTestId(
    `selected-${players[0]["name"].split(" ").join("-")}-remove`
  );
  fireEvent.click(playerRemoveButton);
  expect(selectedPlayersTableBody.children.length).toBe(0);
});

it("Check Sorting of players", () => {
  let playerNameTitle = getByTestId(testIds.availablePlayersName);
  fireEvent.click(playerNameTitle);
  expect(availablePlayersTableBody.children[0].children[0].textContent).toBe(
    "Ajinkya Rahane"
  );

  let playerRoleTitle = getByTestId(testIds.availablePlayersRole);
  fireEvent.click(playerRoleTitle);
  expect(availablePlayersTableBody.children[0].children[1].textContent).toBe(
    "AllRounder"
  );

  let playerBatTitle = getByTestId(testIds.availablePlayersBat);
  fireEvent.click(playerBatTitle);
  expect(availablePlayersTableBody.children[0].children[2].textContent).toBe(
    "50"
  );

  let playerBowlTitle = getByTestId(testIds.availablePlayersBowl);
  fireEvent.click(playerBowlTitle);
  expect(availablePlayersTableBody.children[0].children[3].textContent).toBe(
    "20"
  );
});

it("Select 5 players", () => {
  for (let i = 0; i < 5; i++) {
    let playerSelectButton = getByTestId(
      `available-${players[i]["name"].split(" ").join("-")}-select`
    );
    fireEvent.click(playerSelectButton);
  }
  expect(selectedPlayersTableBody.children.length).toBe(5);
  for (let i = 0; i < 5; i++) {
    expect(selectedPlayersTableBody.children[i].children[0].textContent).toBe(
      players[i]["name"]
    );
  }
});

it("Test on 5 Random players", () => {
  for (let i = 0; selectedPlayers.length != 5; i++) {
    let randomId = randomIds[i];
    if (selectedPlayers.find((id) => id == randomId)) {
      expect(
        getByTestId(
          `available-${players[randomId]["name"].split(" ").join("-")}-select`
        )
      ).toBeDisabled();
    }
    let playerSelectButton = getByTestId(
      `available-${players[randomId]["name"].split(" ").join("-")}-select`
    );
    fireEvent.click(playerSelectButton);
    selectedPlayers.push(randomId);
  }

  expect(selectedPlayersTableBody.children.length).toBe(5);
  for (let i = 0; i < 5; i++) {
    expect(selectedPlayersTableBody.children[i].children[0].textContent).toBe(
      players[selectedPlayers[i]]["name"]
    );
  }
});

it("Add 5 players and remove them", () => {
  for (let i = 0; i < 5; i++) {
    let playerSelectButton = getByTestId(
      `available-${players[i]["name"].split(" ").join("-")}-select`
    );
    fireEvent.click(playerSelectButton);
  }
  expect(selectedPlayersTableBody.children.length).toBe(5);
  for (let i = 0; i < 5; i++) {
    let playerRemoveButton = getByTestId(
      `selected-${players[i]["name"].split(" ").join("-")}-remove`
    );
    fireEvent.click(playerRemoveButton);
    expect(selectedPlayersTableBody.children.length).toBe(4 - i);
  }
  expect(selectedPlayersTableBody.children.length).toBe(0);
});
