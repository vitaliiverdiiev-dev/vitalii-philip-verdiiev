import React from "react";
import { Message } from "./chat.types";
import { MessageBubble } from "./message-bubble";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/shared";

type Props = {
  messages: Message[];
  status: string;
  clientId: string | null;
};

export const ChatWindow: React.FC<Props> = ({ messages, status, clientId }) => {
  return (
    <>
      <CardHeader>
        <CardTitle>Status: {status}</CardTitle>
        <CardDescription>
          Your email (clientId):{" "}
          <span className="font-medium text-green-700">
            {clientId ?? "Connecting..."}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-48 overflow-y-auto border p-2 rounded-md flex flex-col gap-2">
          {messages.length === 0 && (
            <span className="text-gray-500 text-sm">No messages yet.</span>
          )}

          {messages.map((msg, i) => (
            <MessageBubble key={i} msg={msg} />
          ))}
        </div>
      </CardContent>
    </>
  );
};
