import React, { useState } from "react";
import DoorModel from "@/model/Door";
import Door from "@/src/components/Door/Door";
import { attDoors, createDoors } from "@/functions/Doors";

const Game = () => {
  const [doors, setDoors] = useState(createDoors(8, 2));

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

  return <div style={{ display: "flex" }}>{renderDoors()}</div>;
};

export default Game;
