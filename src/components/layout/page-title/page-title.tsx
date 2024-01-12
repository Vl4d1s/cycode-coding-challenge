import { useLocation } from "react-router-dom";

import { links } from "../../../routes/links";
import styles from "./page-title.module.css";

const PageTitle = () => {
  const { pathname } = useLocation();
  const link = links.find((link) => link.path === pathname);
  const title = link ? link.label.toLocaleUpperCase() : "";

  return <h1 className={styles.title}>{title}</h1>;
};

export default PageTitle;
