import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./App.css";

function App() {
  const initialValues = {
    contactNumber: "",
    countryCode: "",
  };
  const [data, setData] = useState(initialValues);

  const handleChange = (e, value, name) => {
    console.log(value, "val");
    console.log(name, "name");
    if (name === "contactNumber") {
      let splitMobile = e?.split(value?.dialCode);
      setData({
        ...data,
        countryCode: value?.dialCode,
        contactNumber: splitMobile?.[1] || "",
      });
    } else
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data, "Form Submitted");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>React Phone Input 2 Split the Country code and Contact Number </h1>
          <PhoneInput
            country={"in"}
            value={`${data.countryCode} ${data.contactNumber}`}
            onChange={(e, phone) => handleChange(e, phone, "contactNumber")}
          />
          <button type="submit">Button</button>
        </form>
      </div>
    </>
  );
}

export default App;
