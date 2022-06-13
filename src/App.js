import { useContext } from "react";
// import classNames from "classnames";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

function App() {
  const themeContext = useContext(ThemeContext);
  const { isDarkMode } = themeContext;
  // const layoutClasses = classNames({
  //   [darkMode]: isDarkMode
  // });
  console.log(".............",themeContext)
  return (
    <div className={isDarkMode ? 'dark' : 'app'}>test</div>
  )
}

export default App;