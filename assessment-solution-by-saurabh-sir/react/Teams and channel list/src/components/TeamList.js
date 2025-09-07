import React, { useState } from "react";
import Team from "./Team";
import "./TeamList.css";

const TeamList = () => {
  const [teams, setTeams] = useState([
    {
      name: "Team1",
      channels: [
        { name: "Channel1", id: 1 },
        { name: "Channel2", id: 2 },
      ],
    },
    {
      name: "Team2",
      channels: [
        { name: "Channel1", id: 1 },
        { name: "Channel2", id: 2 },
      ],
    },
  ]);

  const [teamName, setTeamName] = useState("");

  // update team channels
  const updateTeam = (teamId, newChannels) => {
    const updated = teams.map((t, i) =>
      i === teamId ? { ...t, channels: newChannels } : t
    );
    setTeams(updated);
  };

  // add new team
  const handleAddTeam = () => {
    if (!teamName.trim()) return;
    if (teams.some((t) => t.name === teamName.trim())) return;

    setTeams([...teams, { name: teamName.trim(), channels: [] }]);
    setTeamName("");
  };

  return (
    <div className="w-50 mx-auto">
      <div className="card w-35 mt-50 mx-auto px-10 py-15">
        <div className="layout-column" data-testid="team-list">
          {teams &&
            teams.map((team, id) => (
              <Team key={id} id={id} team={team} updateTeam={updateTeam} />
            ))}
        </div>
        <div className="layout-row">
          <input
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Enter Team Name"
            className="team-list-input w-75"
            data-testid="team-name-input"
          />
          <button
            disabled={
              !teamName.trim() || teams.some((t) => t.name === teamName.trim())
            }
            onClick={handleAddTeam}
            className="team-list-btn x-small w-35 h-30 pa-6 ma-0 ml-6"
            data-testid="add-team-btn"
          >
            Add Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
