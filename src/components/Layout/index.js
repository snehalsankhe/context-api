// import classNames from "classnames";
import { useContext } from "react";
// import Navigation from '../Navigation'
import { ThemeContext } from "../../context/ThemeContext";
import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  const themeContext = useContext(ThemeContext);
  const { isDarkMode } = themeContext;

    return (
        <main className={`${isDarkMode ? styles.dark : ''} ${styles.layout}`}>
          {/* <header>
            <Navigation />                
          </header> */}
          <div>
            { children }
          </div>
        </main>
    );
}
