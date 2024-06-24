import React, { useState } from "react";

export default function SidebarTabInfo({ project, removeProject }) {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="mt-24 mx-auto p-4 w-2/3 bg-white shadow-lg rounded-lg">
      <div className="w-full text-left text-black py-2 border-b border-gray-300 flex justify-between items-center">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <button
          onClick={removeProject}
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Remove Tab
        </button>
      </div>
      <div className="py-4 text-gray-700">
        <p className="mb-2">{project.description}</p>
        <p className="text-sm text-gray-500">Due Date: {project.date}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Tasks</h3>
        <div className="flex items-center mt-2">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter a task"
          />
          <button
            onClick={addTask}
            className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700"
          >
            Add Task
          </button>
        </div>
        <button
          onClick={clearTasks}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md shadow-sm hover:bg-yellow-600"
        >
          Clear Tasks
        </button>
      </div>
      <div className="mt-4">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="mt-2 px-3 py-2 bg-gray-100 rounded-md">
              {task}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No tasks added yet.</p>
        )}
      </div>
    </div>
  );
}
