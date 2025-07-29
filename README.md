# 🌍 react-country-phone-input

[![npm version](https://img.shields.io/npm/v/react-country-phone-input.svg?style=flat-square)](https://www.npmjs.com/package/react-country-phone-input)
[![npm downloads](https://img.shields.io/npm/dm/react-country-phone-input.svg?style=flat-square)](https://www.npmjs.com/package/react-country-phone-input)
[![license](https://img.shields.io/github/license/mauriciogaston/react-country-phone-input?style=flat-square)](https://github.com/mauriciogaston/react-country-phone-input/blob/main/LICENSE)

📱 A beautiful, customizable phone number input with country selector, real-time validation, and automatic formatting for React applications.

## Features

- 🌍 **Easy country selection** with searchable dropdown
- 🔢 **Automatic formatting** based on selected country
- ✅ **Real-time validation** using Google's libphonenumber
- 🎨 **Fully customizable** styling and components
- 📱 **Responsive design** works on all devices
- ⚡ **Zustand-powered** efficient state management
- 🌐 **International support** for 200+ countries
- 🛡️ **TypeScript support** included

## Installation

```bash
npm install react-country-phone-input
# or
yarn add react-country-phone-input
```

### Peer Dependencies

```bash
npm install react react-dom zustand libphonenumber-js
# or
yarn add react react-dom zustand libphonenumber-js
```

## Basic Usage

```jsx
import React, { useState } from "react";
import PhoneInput from "react-country-phone-input";
import "react-country-phone-input/dist/style.css";

function App() {
  const [phone, setPhone] = useState("");

  return (
    <div className="app">
      <PhoneInput value={phone} onChange={setPhone} defaultCountry="us" />
    </div>
  );
}

export default App;
```

## Advanced Usage

### Controlled Component with Validation

```jsx
import React, { useState } from "react";
import PhoneInput from "react-country-phone-input";

function App() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleChange = (value, country, fullNumber) => {
    setPhone(value);

    if (country && !country.validate(fullNumber)) {
      setError("Invalid phone number for selected country");
    } else {
      setError("");
    }
  };

  return (
    <div className="form-group">
      <label>Phone Number</label>
      <PhoneInput
        value={phone}
        onChange={handleChange}
        defaultCountry="ar" // Argentina
        placeholder="Enter phone number"
        error={!!error}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
```

### Custom Styling

```jsx
<PhoneInput
  value={phone}
  onChange={setPhone}
  style={{
    container: { border: "2px solid #e2e8f0", borderRadius: "8px" },
    input: { padding: "12px 15px", fontSize: "16px" },
    dropdown: { backgroundColor: "#f8fafc" },
    flag: { width: "32px" },
  }}
  inputStyle={{ width: "100%" }}
  dropdownStyle={{ maxHeight: "300px" }}
  flagStyle={{ borderRadius: "4px" }}
/>
```

### Country Object

```typescript
interface Country {
  name: string;
  iso2: string;
  dialCode: string;
  priority: number;
  areaCodes: string[] | null;
  validate: (phone: string) => boolean;
}
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

MIT © [Mauricio Gastón Lúquez](https://github.com/mauriciogaston)

---

Created with ❤️ by Mauricio Gastón Lúquez. If you find this package useful, please consider starring it on [GitHub](https://github.com/HX-MLuquez/react-country-phone-input)!
