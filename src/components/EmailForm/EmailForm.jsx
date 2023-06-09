import React, { useState } from "react";
import styles from "./EmailForm.module.scss";
const EmailForm = () => {
  const [input, setInput] = useState("");
  return (
    <div className={styles["container"]}>
      <h1>Sign up for exclusive access.</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Your email address"
        className={`custom-input ${styles["input"]}`}
      />
      <button className={`custom-button-xl`}>Get started</button>
      <p>You’ll receive an email with an invite link to join.</p>
    </div>
  );
};

export default EmailForm;
