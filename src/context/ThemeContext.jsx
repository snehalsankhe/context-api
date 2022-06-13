// 1. Create context
// 2. Export that context for other component
// 3. Create a Provider for given context
// 4. Export a provider
// Provide(context) / Consumer
// Context exports a component --> Provider
// Provider is used to encapsulate applications
import React, { useState } from "react";
import { createContext } from "react";

//create context
export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <ThemeContext.Provider value={ { isDarkMode, toggleDarkMode } }>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;