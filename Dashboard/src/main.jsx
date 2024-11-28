import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Create Context with an initial default value
export const Context = createContext({
  isAuthenticated: false
  // setIsAuthenticated: () => {},
  // admin: {},
  // setAdmin: () => {},
});

const AppWrapper = () => {
  // State management for authentication and admin user
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(false);

  return (
    // Provide Context values to the entire app
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

// Render the root React application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);