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

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;
    setDoors(createDoors(doors, hasGift));
  }, [router?.query]);

  router.query.doors;
  function renderDoors() {
    return doors.map((door) => {
      return (
        <Door
          key={door.numero}
          door={door}
          onChange={(newDoor) => setDoors(attDoors(doors, newDoor))}
        />
      );
    });
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>{renderDoors()}</div>
      <div className={styles.buttons}>
        <Link href={"/"}>
          <button>Voltar</button>
        </Link>
      </div>
    </div>
  );
};

export default Game;
