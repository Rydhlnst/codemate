import ChatBubble from "@/components/Bubble/ChatBubble";
import React from "react";

const ChatPanel = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="h-16 bg-gray-800 flex items-center px-4 text-lg font-semibold">
        #design
      </div>
      <div className="h-full my-5 mx-5">
        <ChatBubble message="Ambatukam" sender="user"/>
        <ChatBubble message="Ambatukam bajingannn" sender="user"/>
      </div>
      <div className="h-16 bg-gray-800 flex items-center px-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-gray-700 p-2 rounded-lg text-white focus:outline-none"
        />
        <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
