import React, { useState } from "react";
import { CirclePlus, Trash2 } from "lucide-react";
import { toast } from "react-toastify";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();

    // validation
    if (!title.trim() || !priority.trim()) {
      toast.error("Please enter both title and task priority"); // error toast substitute
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      priority: Number(priority),
    };

    // add and sort by priority
    const updatedTasks = [...tasks, newTask].sort(
      (a, b) => a.priority - b.priority
    );

    setTasks(updatedTasks);
    setTitle("");
    setPriority("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center w-full px-8">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow p-5 mt-12 mb-8">
        <div className="flex flex-row space-x-3 mb-6">
          <div className="bg-[#DCFAE6] text-[#18A149] rounded-lg p-4 flex items-center justify-center">
            <CirclePlus size={24} />
          </div>
          <div>
            <div className="font-bold text-md sm:text-lg">
              Create a new task
            </div>
            <div className="text-neutral-500 text-sm sm:text-base">
              Add task title and priority to create a new task
            </div>
          </div>
        </div>
        <form
          className="flex flex-col md:flex-row gap-6 mb-3"
          onSubmit={handleAddTask}
        >
          <input
            data-testid="input-task-name"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-gray-800 bg-gray-100"
            placeholder="Enter task title"
          />
          <input
            data-testid="input-task-priority"
            type="number"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="md:w-72 rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-gray-800 bg-gray-100"
            placeholder="Enter task priority"
          />
          <button
            data-testid="submit-button"
            type="submit"
            className="h-12 px-8 rounded-md bg-black text-white font-bold text-base hover:bg-gray-900 transition"
          >
            Add
          </button>
        </form>
      </div>

      <div className="w-full max-w-5xl mb-6">
        <h2 className="text-3xl font-bold text-black">Your Tasks</h2>
      </div>
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow overflow-hidden mb-8">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-spacing-2 border-gray-200">
              <th
                className="py-4 px-6 text-base font-bold text-gray-600"
                style={{ width: "70%" }}
              >
                Task Title
              </th>
              <th
                className="py-4 px-6 text-base font-bold text-gray-600"
                style={{ width: "20%" }}
              >
                Priority
              </th>
              <th className="py-4 px-6" style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody data-testid="tasksList">
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="border-b border-spacing-2 border-gray-200 last:border-b-0 hover:bg-gray-50 transition"
              >
                <td className="py-2 px-6 text-neutral-500 text-base font-normal">
                  {task.title}
                </td>
                <td className="py-2 px-6 text-neutral-500 text-base font-normal">
                  {String(task.priority).padStart(2, "0")}
                </td>
                <td className="py-2 px-6">
                  <button
                    className="p-2 rounded"
                    aria-label="Delete task"
                    onClick={() => handleDelete(task.id)}
                  >
                    <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tasks;
