import React from "react";

import { Logo, Person, Bag } from "../../assets/icons";
import styles from "./style.module.css";
const Header = () => (
  <div>
    <div className={styles.info}>Free US Shipping & Return</div>
    <div className={styles.navbar}>
      <div className={styles.linkwrapper}>
        <div className={styles.link}>Men</div>
        <div className={styles.link}>Women</div>
      </div>
      <div>
        <Logo />
      </div>
      <div className={styles.linkwrapper}>
        <div className={styles.link}>About</div>
        <div className={styles.icon}>
          <Person />
        </div>
        <div className={styles.icon}>
          <Bag />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
