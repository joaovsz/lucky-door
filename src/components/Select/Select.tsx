import React from "react";
import styles from "./Select.module.css";

const Select = () => {
  return (
    <div className={styles.container}>
      <div className={styles.squareMonty}>
        <span>Monty Hall</span>
      </div>
      <div className={styles.squareQtde}>
        <span>Qtde Portas</span>
        <p className={styles.numbers}>0</p>
        <div className={styles.addOrRemove}>
          <button className={styles.button}>-</button>
          <button className={styles.button}>+</button>
        </div>
      </div>
      <div className={styles.squareSelect}>
        <span className={styles.titles}>Porta Selecionada</span>
        <p className={styles.numbers}>0</p>
        <div className={styles.addOrRemove}>
          <button className={styles.button}>-</button>
          <button className={styles.button}>+</button>
        </div>
      </div>
      <div className={styles.squareStart}>
        <button id={styles.start}>Iniciar</button>
      </div>
    </div>
  );
};

export default Select;
