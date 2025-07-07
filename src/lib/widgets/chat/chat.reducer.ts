import { State, Action } from "./chat.types";

export const initialState: State = {
  email: "",
  input: "",
  emailSent: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_INPUT":
      return { ...state, input: action.payload };
    case "EMAIL_SENT":
      return { ...state, emailSent: true };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
