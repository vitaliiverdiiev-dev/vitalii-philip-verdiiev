"use client";

import { Card, CardFooter } from "@/shared";
import { ChatInput } from "./chat-input";
import { ChatWindow } from "./chat-window";
import { EmailPrompt } from "./email-prompt";
import { useChatController } from "./use-chat-controller";

export const Chat = () => {
  const {
    clientId,
    messages,
    status,
    handleSendMessage,
    handleSendEmail,
    uiState,
    dispatch,
  } = useChatController(process.env.NEXT_PUBLIC_CHAT_WS_URL ?? "");

  if (!uiState.emailSent) {
    return (
      <EmailPrompt
        email={uiState.email}
        onChange={(value) => dispatch({ type: "SET_EMAIL", payload: value })}
        onSubmit={handleSendEmail}
      />
    );
  }

  return (
    <Card className="rounded-md shadow">
      <ChatWindow messages={messages} status={status} clientId={clientId} />
      <CardFooter className="flex flex-row gap-2">
        <ChatInput
          value={uiState.input}
          onChange={(value) => dispatch({ type: "SET_INPUT", payload: value })}
          onSend={handleSendMessage}
        />
      </CardFooter>
    </Card>
  );
};
