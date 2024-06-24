import React from "react";
import SidebarTabs from "./SidebarTabs";

export default function Sidebar({ setSelected, projects, setCurrentProject }) {
  return (
    <div className="w-64 h-screen bg-black p-5 mt-14 rounded-tr-2xl pt-14">
      <h2 className="text-xl mb-5 text-white">YOUR PROJECTS</h2>
      <button
        onClick={() => setSelected(true)}
        className="px-4 py-2 text-white bg-zinc-600 bg-opacity-50 rounded-lg hover:bg-opacity-100 transition-opacity duration-300"
      >
        + Add Project
      </button>
      {projects.map((project, index) => (
        <SidebarTabs 
          key={index} 
          project={project} 
          onClick={() => setCurrentProject(project)} 
        />
      ))}
    </div>
  );
}
