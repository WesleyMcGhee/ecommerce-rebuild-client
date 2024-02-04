import { useState } from "react";
import styles from "./AuthInput.module.css";

import type { IAuthInputProps, IAuthInputState } from "./AuthInput.types";

function AuthInput({ type }: IAuthInputProps) {
  const [inputState, setInputState] = useState<IAuthInputState>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  function onChange(e: any) {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formHeader}>
        {type === "signup" ? "Sign Up" : "Sign In"}
      </h1>
      <form>
        {type === "signup" && (
          <input
            name="email"
            placeholder="Email"
            type="email"
            onChange={(e) => {
              onChange(e);
            }}
          ></input>
        )}
        <input
          name="username"
          placeholder="Username"
          onChange={(e) => {
            onChange(e);
          }}
        ></input>
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            onChange(e);
          }}
        ></input>
        {type === "signup" && (
          <input
            name="confirmPassword"
            type="password"
            onChange={(e) => {
              onChange(e);
            }}
          ></input>
        )}
        <input
          type="submit"
          value={type === "signup" ? "Sign Up" : "Sign In"}
        ></input>
      </form>
    </div>
  );
}

export { AuthInput };
