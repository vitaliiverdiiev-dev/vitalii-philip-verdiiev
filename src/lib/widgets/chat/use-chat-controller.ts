import { useReducer } from "react";
import { useChat } from "./use-chat";
import { reducer, initialState } from "./chat.reducer";
import { toast } from "sonner";

export const useChatController = (wsUrl: string) => {
  const chat = useChat(wsUrl);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSendEmail = (): void => {
    const trimmed = state.email.trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      chat.sendEmail(trimmed);
      dispatch({ type: "EMAIL_SENT" });
    } else {
      toast("Please enter a valid email");
    }
  };

  const handleSendMessage = (): void => {
    if (state.input.trim()) {
      chat.sendMessage(state.input.trim());
      dispatch({ type: "SET_INPUT", payload: "" });
    }
  };

  return {
    ...chat,
    uiState: state,
    dispatch,
    handleSendEmail,
    handleSendMessage,
  };
};
