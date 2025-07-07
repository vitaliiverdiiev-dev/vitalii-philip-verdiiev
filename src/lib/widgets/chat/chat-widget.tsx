"use client";

import React, { useState } from "react";
import { Chat } from "./chat";
import { Button, Icon } from "@/shared";

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen((v) => !v)}
        className="
          fixed bottom-4 left-4
          w-14 h-14 rounded-full
          bg-green-600 text-white
          flex items-center justify-center
          shadow-lg
          z-50
          p-0
          hover:bg-green-700
          transition
        "
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <Icon icon="close" className="size-6" />
        ) : (
          <Icon icon="chat" className="size-6" />
        )}
      </Button>

      {isOpen && (
        <div
          className="
            fixed bottom-20 left-4
            w-80 max-w-full
            bg-[#3c3c3c] border-gray-300 rounded-md shadow-lg
            z-50
          "
          style={{
            maxHeight: "70vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Chat />
        </div>
      )}
    </>
  );
};
