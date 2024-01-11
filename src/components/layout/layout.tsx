import React from "react";

import NavigationBar from "./navbar/navbar";
import PageTitle from "./page-title/page-title";
import styles from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <NavigationBar />
      <PageTitle />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
