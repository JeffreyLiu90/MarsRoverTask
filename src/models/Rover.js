const Position = require("../models/Position");
const Direction = require("../models/Direction");

class Rover {
  constructor(position, direction) {
    this.position = position;
    this.direction = direction;
  }

  static create(x, y, dir, gridCoord) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Position X and Y coordinate values must be a number");
    } else if (
      typeof gridCoord.x !== "number" ||
      typeof gridCoord.y !== "number"
    ) {
      throw new Error("Grid X and Y coordinate values must be a number");
    } else {
      const position = Position.create(x, y, gridCoord);
      const direction = Direction.create(dir);
      return new Rover(position, direction);
    }
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
    return `${this.position.displayPosition()} ${this.direction.displayDirection()}`;
  }

  processInstruction(instruction) {
    if (instruction === "L") {
      this.turnLeft();
    } else if (instruction === "R") {
      this.turnRight();
    } else if (instruction === "M") {
      if (
        this.position.x < this.position.grid.x ||
        this.position.y < this.position.grid.y
      ) {
        this.moveForward();
      } else {
        throw new Error("The Rover cannot go off the Grid Size");
      }
    }
  }

  processInstructions(instructions) {
    return instructions
      .split("")
      .forEach(instruction => this.processInstruction(instruction));
  }
}

module.exports = Rover;

const roverGrid = {
  x: 5,
  y: 5
};

const instructions3 = "MMMMMMMMMM";
const rover3 = Rover.create(3, 3, "N", roverGrid);
console.log(rover3);
console.log("rover3 display: ", rover3.displayOutput());
rover3.processInstructions(instructions3);
console.log("rover3 display final: ", rover3.displayOutput());
// console.log(rover3.position.x);
// console.log(rover3.position.y);
// console.log(rover3.position.grid.x);
// console.log(rover3.position.grid.y);

// const grid1 = new Grid(5, 5);
// const gridCoord = { x: 5, y: 5 };
// const rover1 = Rover.create(1, 2, "N", gridCoord);
// console.log("rover1 :", rover1);
// console.log("Position X :", rover1.position.x);
// console.log("Position Y :", rover1.position.y);
// console.log("Position of Grid X :", rover1.position.grid.x);
// console.log("Position of Grid Y :", rover1.position.grid.y);
// console.log("Direction :", rover1.direction.value);

// console.log("Display position initial: ", rover1.displayOutput());
// rover1.processInstructions("LMLMLMLMM");
// console.log("rover1FINALisplay: ", rover1.displayOutput());
// // console.log("rover1: ", rover1);
// console.log("rover1: ", rover1);
