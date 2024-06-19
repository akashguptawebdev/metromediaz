import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


// Create a context with default values
export const context = createContext({ toggle: false });

const AppWrapper = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <context.Provider value={{ toggle, setToggle }}>
      <App />
    </context.Provider>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AppWrapper />
  </React.StrictMode>
);
