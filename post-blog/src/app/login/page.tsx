"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import { login } from "@/api";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formValues, setFormValues] = useState({ name: "", password: "" });
  const router = useRouter();

  const handleOnFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    login(formValues.name, formValues.password).then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  };
  function handleOnFormChange(event: React.FormEvent<HTMLFormElement>): void {
    const inputElement =
      event.target as React.InputHTMLAttributes<HTMLInputElement>;
    const inputName = inputElement.name;
    const inputValue = inputElement.value;
    if (inputName && inputValue) {
      setFormValues((prev) => ({ ...prev, [inputName]: inputValue }));
    }
  }

  return (
    <main className={styles.login_page_container}>
      <form
        className={styles.login_form}
        onSubmit={handleOnFormSubmit}
        onChange={handleOnFormChange}
      >
        <h2>Login</h2>
        <label>
          Name:
          <input placeholder="Name" type="text" name="name" />
        </label>
        <label>
          Password:
          <input placeholder="Password" type="password" name="password" />
        </label>
        <input type="submit" value="submit" />
      </form>
    </main>
  );
}
