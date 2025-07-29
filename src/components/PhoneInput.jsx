import React from "react";
import { useCountryStore } from "../store/useCountryStore";
import { countries } from "../utils/countries";
import { isValidPhoneNumber } from "libphonenumber-js";
import styles from "./PhoneInput.module.css"; // Importamos los estilos

const PhoneInput = ({ value, onChange, placeholder = "Phone number" }) => {
  const { selectedCountry, setCountry } = useCountryStore();

  return (
    <div className={styles.container}>
      <select
        className={styles.select}
        value={selectedCountry.code}
        onChange={(e) => {
          const country = countries.find((c) => c.code === e.target.value);
          setCountry(country);
        }}
      >
        {countries.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name} ({c.dialCode})
          </option>
        ))}
      </select>

      <input
        type="tel"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />

      <span className={styles.icon}>
        {isValidPhoneNumber(selectedCountry.dialCode + value) ? (
          <span style={{ color: "green" }}>✓</span>
        ) : (
          <span style={{ color: "red" }}>✗</span>
        )}
      </span>
    </div>
  );
};

export default PhoneInput;

