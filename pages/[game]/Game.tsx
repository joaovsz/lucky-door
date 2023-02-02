import React, { useState } from "react";
import DoorModel from "@/model/Door";
import Door from "@/src/components/Door/Door";
import { createDoors } from "@/functions/Doors";

const Game = () => {
  const [doors, setDoors] = useState(createDoors(3, 2));

  function renderDoors() {
    return doors.map((door) => {
      return (
        <Door key={door.numero} door={door} onChange={console.log(doors)} />
      );
    });
  }

  return <div style={{ display: "flex" }}></div>;
};

export default Game;
