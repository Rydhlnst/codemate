import { cn } from "@/lib/utils/cn";
import React from "react";

interface ChatBubbleProps {
  message: string;
  sender: "user" | "ai";
  name?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, sender, name }) => {
  const isUser = sender === "user";

  return (
    <div className={cn("flex mb-4", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-sm p-4 rounded-2xl shadow-md",
          isUser
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-100 text-gray-900 rounded-bl-none"
        )}
      >
        {name && (
          <div className="text-xs font-semibold mb-1 text-gray-500">
            {name}
          </div>
        )}
        <p className="text-sm whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
