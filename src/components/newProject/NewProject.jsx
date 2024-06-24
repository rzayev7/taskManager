import React, { useState } from "react";
import Input from "./Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function NewProject({ addProject, setSelected }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSave = () => {
    const newProject = { title, description, date: date.toISOString().split('T')[0] };
    addProject(newProject);
    setSelected(false);
  };

  return (
    <div className="w-[35rem] mt-16 ml-14">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={() => setSelected(false)} className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button onClick={handleSave} className="px-6 py-2 rounded bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input value={title} setValue={setTitle} label="Title" />
        <Input value={description} setValue={setDescription} label="Description" textarea />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="yyyy-MM-dd"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}
