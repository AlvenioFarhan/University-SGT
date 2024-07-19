"use client";

import LoginForm from "../components/LoginForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <LoginForm />
    </main>
  );
}
