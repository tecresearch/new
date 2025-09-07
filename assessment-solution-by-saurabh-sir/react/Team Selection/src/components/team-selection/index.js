// components/team-selection/TeamSelection.js
import React, { useState } from "react";
import playersList from "../../players.json";

export default function TeamSelection() {
  const [availablePlayers, setAvailablePlayers] = useState(playersList);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [disabledPlayers, setDisabledPlayers] = useState(new Set());

  const sortBy = (key) => {
    const sorted = [...availablePlayers].sort((a, b) => {
      if (typeof a[key] === "string") {
        return a[key].localeCompare(b[key]);
      }
      return a[key] - b[key];
    });
    setAvailablePlayers(sorted);
  };

  const addPlayer = (index) => {
    const player = availablePlayers[index];
    if (!disabledPlayers.has(player.name)) {
      setSelectedPlayers([...selectedPlayers, player]);
      setDisabledPlayers(new Set([...disabledPlayers, player.name]));
    }
  };

  const removePlayer = (name) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p.name !== name));
    const updated = new Set(disabledPlayers);
    updated.delete(name);
    setDisabledPlayers(updated);
  };

  return (
    <div className="flex flex-col items-start gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 pt-8 sm:pt-12 pb-24 w-full">
      {/* Two Columns */}
      <div className="flex w-full items-start gap-6 flex-col lg:flex-row">
        {/* Available Players Section */}
        <div className="flex-1 w-full">
          <h2
            className="m-0 p-0 mb-6 font-satoshi text-2xl sm:text-[32px] leading-8 sm:leading-[44px] font-bold text-[#101828]"
            style={{ fontFeatureSettings: "'ss03' on" }}
          >
            Available Players
          </h2>
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="p-4 sm:p-6">
              <div className="overflow-hidden">
                <table
                  className="w-full table-fixed font-satoshi text-sm"
                  style={{ fontFeatureSettings: "'ss03' on" }}
                >
                  <thead>
                    <tr className="border-b border-[#ECEFF2] align-middle">
                      <th
                        data-testid="available-players-name"
                        onClick={() => sortBy("name")}
                        className="text-left py-2 sm:py-3 px-3 sm:px-6 font-bold text-[#516778] cursor-pointer hover:bg-gray-50 w-auto sm:w-[160px]"
                      >
                        Name
                      </th>
                      <th
                        data-testid="available-players-role"
                        onClick={() => sortBy("type")}
                        className="text-left py-2 sm:py-3 px-3 sm:px-6 font-bold text-[#516778] cursor-pointer hover:bg-gray-50"
                      >
                        Role
                      </th>
                      <th
                        data-testid="available-players-bat"
                        onClick={() => sortBy("battingSkill")}
                        className="hidden sm:table-cell text-center py-2 sm:py-3 px-3 sm:px-6 font-bold text-[#516778] cursor-pointer hover:bg-gray-50"
                      >
                        Bat
                      </th>
                      <th
                        data-testid="available-players-bowl"
                        onClick={() => sortBy("bowlingSkill")}
                        className="hidden sm:table-cell text-center py-2 sm:py-3 px-3 sm:px-6 font-bold text-[#516778] cursor-pointer hover:bg-gray-50"
                      >
                        Bowl
                      </th>
                    </tr>
                  </thead>
                  <tbody data-testid="available-players-table-body">
                    {availablePlayers.map((player, index) => (
                      <tr
                        data-testid={`available-${player.name
                          .split(" ")
                          .join("-")}-row`}
                        key={player.name}
                        className="border-b border-[#ECEFF2] hover:bg-gray-50 align-middle"
                      >
                        <td
                          data-testid={`available-${player.name
                            .split(" ")
                            .join("-")}-name`}
                          className="flex items-center gap-3 py-2 sm:py-3 px-3 sm:px-6 text-[#101828] truncate"
                        >
                          {player.name}
                        </td>
                        <td className="py-2 sm:py-3 px-3 sm:px-6 text-[#516778] truncate">
                          {player.type}
                        </td>
                        <td className="hidden sm:table-cell py-2 sm:py-3 px-3 sm:px-6 text-center text-[#516778]">
                          {player.battingSkill}
                        </td>
                        <td className="hidden sm:table-cell py-2 sm:py-3 px-3 sm:px-6 text-center text-[#516778]">
                          {player.bowlingSkill}
                        </td>
                        <td className="py-0 px-0 text-center w-12 sm:w-[68px]">
                          <button
                            data-testid={`available-${player.name
                              .split(" ")
                              .join("-")}-select`}
                            onClick={() => addPlayer(index)}
                            aria-label="Select player"
                            disabled={disabledPlayers.has(player.name)}
                            className={`w-12 sm:w-[68px] px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-center ${
                              disabledPlayers.has(player.name)
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            <span className="inline-flex items-center justify-center w-12 h-6 rounded-full bg-green-100">
                              <img src="/assets/arrow.svg" alt="Select" />
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Players Section */}
        <div className="flex-1 w-full">
          <h2
            className="m-0 p-0 mb-6 font-satoshi text-2xl sm:text-[32px] leading-8 sm:leading-[44px] font-bold text-[#101828]"
            style={{ fontFeatureSettings: "'ss03' on" }}
          >
            Selected Players
          </h2>
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="p-4 sm:p-6">
              <div className="overflow-hidden">
                <table
                  className="w-full table-fixed font-satoshi text-sm"
                  style={{ fontFeatureSettings: "'ss03' on" }}
                >
                  <thead>
                    <tr className="border-b border-[#ECEFF2] align-middle">
                      <th className="text-left py-2 sm:py-3 px-3 sm:px-6 font-bold text-[#516778]">
                        Name
                      </th>
                      <th className="text-left py-2 sm:py-3 px-3 sm:px-6 font-bold text-[#516778]">
                        Role
                      </th>
                      <th className="hidden sm:table-cell text-center py-2 sm:py-3 px-3 sm:px-6 font-bold text-[#516778]">
                        Bat
                      </th>
                      <th className="hidden sm:table-cell text-center py-2 sm:py-3 px-3 sm:px-6 font-bold text-[#516778]">
                        Bowl
                      </th>
                      <th className="w-12 sm:w-[68px]"></th>
                    </tr>
                  </thead>
                  <tbody data-testid="selected-players-table-body">
                    {selectedPlayers.map((player) => (
                      <tr
                        key={player.name}
                        data-testid={`selected-${player.name
                          .split(" ")
                          .join("-")}-row`}
                        className="border-b border-[#ECEFF2] hover:bg-gray-50 align-middle"
                      >
                        <td className="py-2 sm:py-3 px-3 sm:px-6 text-[#101828]">
                          {player.name}
                        </td>
                        <td className="py-2 sm:py-3 px-3 sm:px-6 text-[#516778]">
                          {player.type}
                        </td>
                        <td className="hidden sm:table-cell text-center py-2 sm:py-3 px-3 sm:px-6 text-[#516778]">
                          {player.battingSkill}
                        </td>
                        <td className="hidden sm:table-cell text-center py-2 sm:py-3 px-3 sm:px-6 text-[#516778]">
                          {player.bowlingSkill}
                        </td>
                        <td className="py-0 px-0 text-center">
                          <button
                            data-testid={`selected-${player.name
                              .split(" ")
                              .join("-")}-remove`}
                            onClick={() => removePlayer(player.name)}
                            aria-label="Remove player"
                            className="w-12 sm:w-[68px] px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-center hover:bg-gray-50"
                          >
                            <span className="inline-flex items-center justify-center w-12 h-6 rounded-full bg-red-100">
                              <img src="/assets/delete.svg" alt="Remove" />
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
