"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../Bar/SideBar";
import ChatPanel from "../Panel/ChatPanel";
import ProfileSidebar from "../Bar/ProfileSideBar";

const SlackDiscordUI = () => {
  const [workspaces, setWorkspaces] = useState([
    { id: 1, name: "#design" },
    { id: 2, name: "#social" },
  ]);
  const router = useRouter();

  const addWorkspace = () => {
    const newId = workspaces.length + 1;
    const newName = `#new-group-${newId}`;
    setWorkspaces([...workspaces, { id: newId, name: newName }]);
    router.push(`/group/${newId}`);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar workspaces={workspaces} onAddWorkspace={addWorkspace} />
      <ChatPanel />
      <ProfileSidebar />
    </div>
  );
};

export default SlackDiscordUI;
