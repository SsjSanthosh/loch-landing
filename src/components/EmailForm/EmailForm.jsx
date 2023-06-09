import React, { useState } from "react";
import styles from "./EmailForm.module.scss";
const EmailForm = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setError(true);
      return;
    }
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // check if email is valid
    if (!mailFormat.test(input)) {
      setError(true);
    } else {
      window.location.href = "https://app.loch.one/welcome";
    }
  };
  return (
    <div className={styles["container"]}>
      <h1>Sign up for exclusive access.</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => {
            setError(false);
            setInput(e.target.value);
          }}
          placeholder="Your email address"
          className={`custom-input ${styles["input"]} ${
            error && `error-border`
          }`}
        />
        {error && (
          <p className="error-text">Please enter a valid email address.</p>
        )}
      </form>
      <button className={`custom-button-xl`} type="submit">
        Get started
      </button>
      <p className={styles["form-info"]}>
        You’ll receive an email with an invite link to join.
      </p>
    </div>
  );
};

export default EmailForm;
