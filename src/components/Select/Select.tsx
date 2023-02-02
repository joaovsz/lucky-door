import Link from "next/link";
import React, { useState } from "react";
import styles from "./Select.module.css";

const Select = () => {
  const [quantity, setQuantity] = useState(0);
  const [giftPosition, setGiftPosition] = useState(0);

  const Increment = () => {
    setQuantity(quantity + 1);
  };
  const Decrement = () => {
    setQuantity(quantity - 1);
  };

  const IncrementGift = () => {
    setGiftPosition(giftPosition + 1);
  };
  const DecrementGift = () => {
    setGiftPosition(giftPosition - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.squareMonty}>
        <span>Monty Hall</span>
      </div>
      <div className={styles.squareQtde}>
        <span>Qtde Portas</span>
        <p className={styles.numbers}>{quantity}</p>
        <div className={styles.addOrRemove}>
          <button className={styles.button} onClick={() => Decrement()}>
            -
          </button>
          <button className={styles.button} onClick={() => Increment()}>
            +
          </button>
        </div>
      </div>
      <div className={styles.squareSelect}>
        <span className={styles.titles}>Porta Selecionada</span>
        <p className={styles.numbers}>{giftPosition}</p>
        <div className={styles.addOrRemove}>
          <button className={styles.button} onClick={() => DecrementGift()}>
            -
          </button>
          <button className={styles.button} onClick={() => IncrementGift()}>
            +
          </button>
        </div>
      </div>
      <div className={styles.squareStart}>
        <Link href={`/game/${quantity}/${giftPosition}`}>
          <div id={styles.start}>Iniciar</div>
        </Link>
      </div>
    </div>
  );
};

export default Select;
