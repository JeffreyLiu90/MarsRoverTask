const Position = require("../models/Position");
const Direction = require("../models/Direction");
const Grid = require("../models/Grid");

class Rover {
  constructor(grid, position, direction) {
    this.grid = grid;
    this.position = position;
    this.direction = direction;
  }

  static create(x, y, dir, gridCoord) {
    const grid = Grid.create(gridCoord);
    const position = Position.create(x, y, gridCoord);
    const direction = Direction.create(dir);
    return new Rover(grid, position, direction);
  }

  turnLeft() {
    this.direction.turnLeft();
  }

  turnRight() {
    this.direction.turnRight();
  }

  // checkLarger(a, b) {
  //   if (a < b) {
  //  a+= 1
  //   } else {
  //     throw new Error("NO!");
  //   }
  // }

  moveEast() {
    if (this.position.x < this.grid.x) {
      this.position.x += 1;
    } else {
      throw new Error("The rover cannot go off the grid size's max X value");
    }
  }
  moveWest() {
    if (this.position.x > 0) {
      this.position.x -= 1;
    } else {
      throw new Error("The rover cannot go off the grid size's min X value");
    }
  }

  moveNorth() {
    if (this.position.y < this.grid.y) {
      this.position.y += 1;
    } else {
      throw new Error("The rover cannot go off the grid's max Y value");
    }
  }

  moveSouth() {
    if (this.position.y > 0) {
      this.position.y -= 1;
    } else {
      throw new Error(
        "The rover cannot go off the grid size's minimum Y value"
      );
    }
  }

  moveForward() {
    if (this.direction.value === "N") {
      this.moveNorth();
    }

    if (this.direction.value === "W") {
      this.moveWest();
    }

    if (this.direction.value === "S") {
      this.moveSouth();
    }

    if (this.direction.value === "E") {
      this.moveEast();
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
      this.moveForward();
    }
  }

  processInstructions(instructions) {
    return instructions
      .split("")
      .forEach(instruction => this.processInstruction(instruction));
  }
}

module.exports = Rover;
