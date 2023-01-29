import React from "react";
import styles from "./Gift.module.css";

const Gift = () => {
  return (
    <>
      <div className={styles.caixa}>
        <div className={styles.tampa}></div>
        <div className={styles.lacoX}></div>
        <div className={styles.lacoY}></div>
      </div>
    </>
  );
};

export default Gift;
