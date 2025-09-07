import React from "react";
import "./index.css";

export default function KanbanBoard(props) {
  let [tasks, setTasks] = React.useState([
    { name: "1", stage: 0 },
    { name: "2", stage: 0 },
  ]);

  let [stagesNames] = React.useState(["Backlog", "To Do", "Ongoing", "Done"]);
  let [taskName, setTaskName] = React.useState("");

  // Organize tasks by stage
  let stagesTasks = [];
  for (let i = 0; i < stagesNames.length; ++i) {
    stagesTasks.push([]);
  }
  for (let task of tasks) {
    const stageId = task.stage;
    stagesTasks[stageId].push(task);
  }

  // ✅ Create Task
  const createTask = () => {
    if (taskName.trim() === "") return; // Do nothing if empty
    // Prevent duplicate names
    if (tasks.some((task) => task.name === taskName.trim())) return;

    setTasks([...tasks, { name: taskName.trim(), stage: 0 }]);
    setTaskName(""); // Clear input
  };

  // ✅ Move Task Back
  const moveBack = (taskName) => {
    setTasks(
      tasks.map((task) =>
        task.name === taskName && task.stage > 0
          ? { ...task, stage: task.stage - 1 }
          : task
      )
    );
  };

  // ✅ Move Task Forward
  const moveForward = (taskName) => {
    setTasks(
      tasks.map((task) =>
        task.name === taskName && task.stage < stagesNames.length - 1
          ? { ...task, stage: task.stage + 1 }
          : task
      )
    );
  };

  // ✅ Delete Task
  const deleteTask = (taskName) => {
    setTasks(tasks.filter((task) => task.name !== taskName));
  };

  return (
    <div className="mt-20 layout-column justify-content-center align-items-center">
      <section className="mt-50 layout-row align-items-center justify-content-center">
        <input
          id="create-task-input"
          type="text"
          className="large"
          placeholder="New task name"
          data-testid="create-task-input"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          type="submit"
          className="ml-30"
          data-testid="create-task-button"
          onClick={createTask}
        >
          Create task
        </button>
      </section>

      <div className="mt-50 layout-row">
        {stagesTasks.map((stageTasks, i) => {
          return (
            <div className="card outlined ml-20 mt-0" key={`${i}`}>
              <div className="card-text">
                <h4>{stagesNames[i]}</h4>
                <ul className="styled mt-50" data-testid={`stage-${i}`}>
                  {stageTasks.map((task, index) => {
                    return (
                      <li className="slide-up-fade-in" key={`${i}${index}`}>
                        <div className="li-content layout-row justify-content-between align-items-center">
                          <span
                            data-testid={`${task.name
                              .split(" ")
                              .join("-")}-name`}
                          >
                            {task.name}
                          </span>
                          <div className="icons">
                            <button
                              className="icon-only x-small mx-2"
                              data-testid={`${task.name
                                .split(" ")
                                .join("-")}-back`}
                              onClick={() => moveBack(task.name)}
                              disabled={task.stage === 0}
                            >
                              <i className="material-icons">arrow_back</i>
                            </button>
                            <button
                              className="icon-only x-small mx-2"
                              data-testid={`${task.name
                                .split(" ")
                                .join("-")}-forward`}
                              onClick={() => moveForward(task.name)}
                              disabled={task.stage === stagesNames.length - 1}
                            >
                              <i className="material-icons">arrow_forward</i>
                            </button>
                            <button
                              className="icon-only danger x-small mx-2"
                              data-testid={`${task.name
                                .split(" ")
                                .join("-")}-delete`}
                              onClick={() => deleteTask(task.name)}
                            >
                              <i className="material-icons">delete</i>
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
