class Direction {
  constructor(value) {
    this.value = value;
  }
  static create(value) {
    const validDirections = ["N", "S", "E", "W"];
    if (validDirections.includes(value)) {
      return new Direction(value);
    } else {
      throw new Error("This is not a valid direction");
    }
  }

  static rightMapper = {
    N: "E",
    S: "W",
    E: "S",
    W: "N"
  };

  static leftMapper = {
    N: "W",
    S: "E",
    E: "N",
    W: "S"
  };

  turnRight() {
    const newValue = Direction.rightMapper[this.value];
    this.value = newValue;
  }

  turnLeft() {
    const newValue = Direction.leftMapper[this.value];
    this.value = newValue;
  }
}
