"use client";

import React from "react";

interface SidebarProps {
  workspaces: { id: number; name: string }[];
  onAddWorkspace: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ workspaces, onAddWorkspace }) => {
  return (
    <div className="w-1/5 bg-gray-800 p-4 flex flex-col gap-4">
      <div className="flex items-center justify-center h-16 bg-gray-700 rounded-xl">
        <span className="text-lg font-bold">Workspace</span>
      </div>
      <div>
        <h2 className="text-sm font-semibold mb-2">Workspaces</h2>
        <ul className="space-y-2">
          {workspaces.map((workspace) => (
            <li
              key={workspace.id}
              className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer"
            >
              {workspace.name}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={onAddWorkspace}
        className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
      >
        New Group / New Chat
      </button>
    </div>
  );
};

export default Sidebar;
