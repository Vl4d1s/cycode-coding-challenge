import { NavLink } from "react-router-dom";

import logo from "../../../assets/logo.svg";
import { links } from "../../../routes/links";
import styles from "./navbar.module.css";

const NavigationBar = () => {
  const renderedLinks = (links || []).map((link) => (
    <li className={styles.menuItem} key={link.label}>
      <NavLink to={link.path}>{link.label}</NavLink>
    </li>
  ));

  return (
    <nav className={styles.navigationBar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <NavLink to="/" className={styles.activeLogo}>
            <img src={logo} alt="Company Logo" />
          </NavLink>
        </div>
        <ul className={styles.menu}>{renderedLinks}</ul>
      </div>
    </nav>
  );
};
export default NavigationBar;
