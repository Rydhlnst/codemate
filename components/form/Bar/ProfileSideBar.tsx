import React from "react";

const ProfileSidebar = () => {
  return (
    <div className="w-1/5 bg-gray-800 p-4 flex flex-col gap-4">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-gray-700 rounded-full mb-2" />
        <h2 className="text-lg font-semibold">Costa</h2>
        <p className="text-sm text-gray-400">AI Assistant</p>
      </div>
      <div className="text-sm">
        <p>Email: costa@ai.com</p>
        <p>Bio: Your friendly AI assistant</p>
      </div>
      <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
        Set Status
      </button>
      <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
        View As
      </button>
    </div>
  );
};

export default ProfileSidebar;
