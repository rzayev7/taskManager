import React from 'react';

export default function SidebarTabs({ project, onClick }) {
  return (
    <div>
      <button 
        onClick={onClick} 
        className="w-full text-left text-white py-2"
      >
        {project.title}
      </button>
    </div>
  );
}
