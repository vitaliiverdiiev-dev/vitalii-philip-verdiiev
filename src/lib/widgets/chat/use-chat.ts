import { useEffect, useRef, useState } from "react";

type ServerToClientMessage =
  | { type: "assignClientId"; clientId: string }
  | { type: "reply"; message: string };

type ClientToServerMessage =
  | { type: "message"; message: string }
  | { type: "email"; email: string };

type Message = {
  id: string;
  text: string;
  sender: "client" | "server";
};

const CHAT_HISTORY_KEY = "chatHistory";

const createMessage = (text: string, sender: "client" | "server"): Message => {
  return { id: crypto.randomUUID(), text, sender };
};

export const useChat = (wsUrl: string) => {
  const wsRef = useRef<WebSocket | null>(null);
  const [clientId, setClientId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState<
    "connecting" | "open" | "closed" | "error"
  >("closed");
  const loadedFromStorage = useRef(false);

  useEffect(() => {
    console.log("[useChat] Loading chat history from localStorage...");
    const saved = localStorage.getItem(CHAT_HISTORY_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Message[];
        console.log("[useChat] Loaded messages:", parsed);
        setMessages(parsed);
      } catch (e) {
        console.error("[useChat] Failed to parse localStorage:", e);
      }
    }
    loadedFromStorage.current = true;
  }, []);

  useEffect(() => {
    if (loadedFromStorage.current) {
      console.log("[useChat] Saving chat history to localStorage:", messages);
      localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    setStatus("connecting");
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => setStatus("open");
    ws.onclose = () => setStatus("closed");
    ws.onerror = () => setStatus("error");

    ws.onmessage = (event) => {
      try {
        const data: ServerToClientMessage = JSON.parse(event.data);

        switch (data.type) {
          case "assignClientId":
            console.log("[useChat] Received clientId:", data.clientId);
            setClientId(data.clientId);
            break;

          case "reply":
            setMessages((prev) => {
              const updated = [...prev, createMessage(data.message, "server")];
              console.log(
                "[useChat] New server message received:",
                data.message,
                updated
              );
              return updated;
            });
            break;
        }
      } catch {}
    };

    return () => {
      ws.close();
      wsRef.current = null;
    };
  }, [wsUrl]);

  const sendMessage = (message: string) => {
    if (!clientId) {
      throw new Error("ClientId not assigned yet");
    }
    const payload: ClientToServerMessage = { type: "message", message };
    wsRef.current?.send(JSON.stringify(payload));

    setMessages((prev) => {
      const updated = [...prev, createMessage(message, "client")];
      console.log("[useChat] New client message sent:", message, updated);
      return updated;
    });
  };

  const sendEmail = (email: string) => {
    const payload: ClientToServerMessage = { type: "email", email };
    wsRef.current?.send(JSON.stringify(payload));
  };

  return { clientId, messages, status, sendMessage, sendEmail };
};
