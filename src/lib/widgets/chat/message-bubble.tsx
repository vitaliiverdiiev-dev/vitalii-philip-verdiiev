import React from "react";
import { Message } from "./chat.types";

type Props = { msg: Message };

export const MessageBubble: React.FC<Props> = ({ msg }) => {
  const baseStyle = "p-1 rounded w-fit flex flex-col gap-1 text-sm px-2 py-1";
  const style =
    msg.sender === "client"
      ? "bg-green-100 dark:bg-transparent text-green-800 dark:text-green-600 dark:border-1 dark:border-green-800 dark:font-bold self-end"
      : "bg-gray-100 dark:bg-transparent text-gray-900 dark:text-gray-200 dark:border-1 dark:border-gray-300 text-right";

  return <div className={`${baseStyle} ${style}`}>{msg.text}</div>;
};
