"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/UsernameInput.module.scss";

function UsernameInput() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const findUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/users/${input}`);
    setInput("");
  };

  return (
    <form onSubmit={findUser} className={styles.form_container}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for user..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default UsernameInput;
