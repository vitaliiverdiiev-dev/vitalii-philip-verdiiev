export type Message = {
  id: string;
  text: string;
  sender: "client" | "server";
};

export type State = {
  email: string;
  input: string;
  emailSent: boolean;
};

export type Action =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_INPUT"; payload: string }
  | { type: "EMAIL_SENT" }
  | { type: "RESET" };
