import styles from "./Door.module.css";
import React from "react";
import DoorModel from "@/model/Door";

interface DoorProps {
  door: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

const Porta = (props: DoorProps) => {
  const { door } = props;
  const selected = door.selected ? styles.selected : "";
  const open = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    props.onChange(door.open());
  };

  const alternateSelection = (e: any) => {
    props.onChange(door.alternateSelection());
  };
  const renderDoor = () => {
    return (
      <div className={styles.door}>
        <span className={styles.number}>{door.numero}</span>
        <span className={styles.macaneta} onClick={open}></span>
      </div>
    );
  };

  return (
    <div className={styles.area} onClick={alternateSelection}>
      <div className={`${styles.structure} ${selected}`}>
        {door.isOpen ? false : renderDoor()}
      </div>
      <div className={styles.base}></div>
    </div>
  );
};

export default Porta;
