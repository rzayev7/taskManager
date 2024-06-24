import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import SidebarTabInfo from "./components/SidebarTabInfo";
import NewProject from "./components/newProject/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [selected, setSelected] = useState(false);
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  const addProject = (project) => {
    setProjects([...projects, project]);
    setCurrentProject(project); // Automatically set the new project as current
  };

  const removeProject = (projectToRemove) => {
    setProjects(projects.filter(project => project !== projectToRemove));
    setCurrentProject(null); // Clear current project
  };

  return (
    <div className="flex h-screen">
      <Sidebar 
        projects={projects} 
        setSelected={setSelected} 
        setCurrentProject={setCurrentProject}
      />
      {selected ? (
        <NewProject 
          addProject={addProject} 
          setSelected={setSelected} 
        />
      ) : currentProject ? (
        <SidebarTabInfo 
          project={currentProject} 
          removeProject={() => removeProject(currentProject)} 
        />
      ) : (
        <NoProjectSelected setSelected={setSelected} />
      )}
    </div>
  );
}

export default App;
