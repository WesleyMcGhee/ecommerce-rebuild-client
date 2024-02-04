export interface IAuthInputProps {
  type: "signup" | "login";
}

export interface IAuthInputState {
  email?: string;
  username: string;
  password: string;
  confirmPassword?: string;
}
