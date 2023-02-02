export default class DoorModel {
  #numero: number;
  #selected: boolean;
  #hasGift: boolean;
  #isOpen: boolean;

  constructor(
    numero: number,
    selected: boolean = false,
    hasGift: boolean = false,
    isOpen: boolean = false
  ) {
    this.#numero = numero;
    this.#selected = selected;
    this.#hasGift = hasGift;
    this.#isOpen = isOpen;
  }
  get numero(): number {
    return this.#numero;
  }

  get selected(): boolean {
    return this.#selected;
  }
  get hasGift(): boolean {
    return this.#hasGift;
  }
  get isOpen(): boolean {
    return this.#isOpen;
  }
  //Retornam novas Instâncias
  desmarcar() {
    const selected = false;
    return new DoorModel(this.numero, selected, this.hasGift, this.isOpen);
  }
  alternateSelection() {
    const selected = !this.selected;
    return new DoorModel(this.numero, selected, this.hasGift, this.isOpen);
  }
  open() {
    const opened = true;
    return new DoorModel(this.numero, this.selected, this.hasGift, opened);
  }
}

const p1 = new DoorModel(2);
