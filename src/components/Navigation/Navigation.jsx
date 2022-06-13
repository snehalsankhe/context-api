import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useAuth } from '../../context/auth'
import styles from "./Navigation.module.css";

const { navBar, navigation, navLink } = styles;

const Navigation = () => {
  const themeContext = useContext(ThemeContext);
  const auth = useAuth()
  // const [theme, setTheme] = themeContext
  const { toggleDarkMode } = themeContext;
  const navigate = useNavigate()
  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
  // console.log("Context theme value...............", themeContext)
  // const onTheme = () => {
  // console.log("Context theme value", ThemeContext);
  // }

  return (
    <div className={styles.navigation} >
      <nav className={navBar}>
        <ul>
          <li className={navLink}>
            <Link to="/"> Home </Link>
          </li>
          <li className={navLink}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className={navLink}>
            {!auth.user ? <Link to="/login">Login</Link> :
            <Link to="/" onClick={handleLogout}>Logout</Link>}
          </li>
        </ul>
      </nav>
      <div>
        <label htmlFor="theme">Dark Theme</label>
        <input type="checkbox" name="theme" onClick={toggleDarkMode}/>
      </div>
    </div>
  );
};

export default Navigation;