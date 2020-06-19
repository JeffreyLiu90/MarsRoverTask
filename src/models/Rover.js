class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  displayPosition() {
    return `${this.x} ${this.y}`;
  }
}

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

  displayDirection() {
    return `${this.value}`;
  }
}

class Rover {
  constructor(position, direction) {
    this.position = position;
    this.direction = direction;
  }

  static create(x, y, dir) {
    const position = new Position(x, y);
    const direction = Direction.create(dir);
    return new Rover(position, direction);
  }

  turnLeft() {
    this.direction.turnLeft();
  }

  turnRight() {
    this.direction.turnRight();
  }

  moveForward() {
    if (this.direction.value === "N") {
      this.position.y += 1;
    } else if (this.direction.value === "W") {
      this.position.x -= 1;
    } else if (this.direction.value === "S") {
      this.position.y -= 1;
    } else if (this.direction.value === "E") {
      this.position.x += 1;
    }
  }

  displayOutput() {
    return `${this.position.displayPosition()} ${this.direction.displayDirection()} `;
  }

  processInstruction(instruction) {
    if (instruction === "L") {
      this.turnLeft();
    } else if (instruction === "R") {
      this.turnRight();
    } else if (instruction === "M") {
      this.moveForward();
    }
  }

  processInstructions(instructions) {
    const roverInstructions = instructions
      .split("")
      .forEach(instruction => this.processInstruction(instruction));
  }
}

const rover1 = Rover.create(1, 2, "N");
console.log("rover1display: ", rover1.displayOutput());
console.log("rover1: ", rover1);
rover1.processInstructions("LMLMLMLMM");
console.log("rover1: ", rover1);
console.log("rover1FINALisplay: ", rover1.displayOutput());
