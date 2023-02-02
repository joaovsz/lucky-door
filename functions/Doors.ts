import DoorModel from "@/model/Door";

export function createDoors(
  quantity: number,
  doorWithGift: number
): DoorModel[] {
  return Array.from({ length: quantity }, (_, i) => {
    const number = i + 1;
    const hasGift = number === doorWithGift;
    return new DoorModel(number, false, hasGift, false);
  });
}

export function attDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
    return doors.map(doorAT=> {
        const sameOfModified = doorAT.numero === modifiedDoor.numero
        if (sameOfModified) {
            return modifiedDoor
        } else {
            return modifiedDoor.isOpen ? doorAT: doorAT.desmarcar()
        }
    })
};
