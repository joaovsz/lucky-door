import React, { useEffect, useState } from "react";
import styles from "../../../styles/game.module.css";
import Door from "@/src/components/Door/Door";
import { attDoors, createDoors } from "@/functions/Doors";
import Link from "next/link";
import { useRouter } from "next/router";
import DoorModel from "@/model/Door";

const Game = () => {
  const router = useRouter();
  const [doors, setDoors] = useState<DoorModel[]>([]);
  const [isValid, setIsvalid] = useState(false);

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;
    const doorsValid = doors >= 3 || doors <= 20;
    const hasGiftValid = hasGift >= 1 && hasGift <= doors;
    setIsvalid(doorsValid && hasGiftValid);
    setDoors(createDoors(doors, hasGift));
  }, [router.query.doors, router.query.hasGift]);

  router.query.doors;
  function renderDoors() {
    return (
      isValid &&
      doors.map((door) => {
        return (
          <Door
            key={door.numero}
            door={door}
            onChange={(newDoor) => setDoors(attDoors(doors, newDoor))}
          />
        );
      })
    );
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>
        {isValid ? renderDoors() : <h1>Valores inválidos</h1>}
      </div>
      <div className={styles.buttons}>
        <Link href={"/"} passHref>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
};

export default Game;
