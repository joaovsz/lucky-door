import DoorModel from "@/model/Door";

export function createDoors(quantity: number, selected: number): DoorModel[] {
  return Array.from({ length: quantity }, (_, i) => {
    const number = i + 1;
    const hasGift = number === selected;
    return new DoorModel(number, hasGift);
  });
}

export function attDoors(doors: DoorModel[]);
