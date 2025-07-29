import React, { useState } from "react";
import PhoneInput from "./components/PhoneInput";
import styles from "./App.module.css";

function App() {
  const [phone, setPhone] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <PhoneInput
          value={phone}
          onChange={setPhone}
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
}

export default App;
