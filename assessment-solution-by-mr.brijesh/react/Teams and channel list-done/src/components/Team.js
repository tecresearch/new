import React, { useState } from "react";
import "./Team.css";

const Team = ({ team, id, updateTeam }) => {
  const [channelName, setChannelName] = useState("");

  // handle add channel
  const handleAddChannel = () => {
    if (!channelName.trim()) return;
    if (team.channels.some((c) => c.name === channelName.trim())) return;

    const newChannel = {
      name: channelName.trim(),
      id:
        team.channels.length > 0
          ? Math.max(...team.channels.map((c) => c.id)) + 1
          : 1,
    };

    updateTeam(id, [...team.channels, newChannel]);
    setChannelName("");
  };

  // handle remove channel
  const handleRemoveChannel = (channelId) => {
    const newChannels = team.channels.filter((c) => c.id !== channelId);
    updateTeam(id, newChannels);
  };

  return (
    <div>
      {team && <h4 className="mt-0 mb-6">{team.name}</h4>}
      {team && (
        <div className="layout-row justify-content-end mb-6">
          <input
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            placeholder="Enter Channel Name"
            className="channel-name-input w-45 px-13"
            data-testid={"channel-name-input-" + id}
          />
          <button
            disabled={
              !channelName.trim() ||
              team.channels.some((c) => c.name === channelName.trim())
            }
            onClick={handleAddChannel}
            className="channel-name-btn x-small w-35 h-30 pa-6 ma-0 ml-6"
            data-testid={"add-channel-btn-" + id}
          >
            Add Channel
          </button>
        </div>
      )}
      {team && (
        <ul className="styled mb-20 pl-25" data-testid={"channel-list-" + id}>
          {team.channels &&
            team.channels.map((channel) => (
              <li
                key={channel.id}
                className="flex slide-up-fade-in justify-content-between align-items-center pl-10 pr-5 py-6 mt-0 mb-6"
              >
                <span>{channel.name}</span>
                <button
                  onClick={() => handleRemoveChannel(channel.id)}
                  data-testid={"remove-channel-button-" + id + channel.id}
                  className="icon-only x-small danger ma-0 pa-0"
                >
                  <i className="material-icons">delete</i>
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Team;
