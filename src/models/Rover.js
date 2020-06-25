const Position = require("../models/Position");
const Direction = require("../models/Direction");
const Boundary = require("../models/Boundary");

class Rover {
  constructor(boundary, position, direction) {
    this.boundary = boundary;
    this.position = position;
    this.direction = direction;
  }

  static create(x, y, dir, boundary) {
    const roverBoundary = Boundary.create(boundary);
    const position = Position.create(x, y, boundary);
    const direction = Direction.create(dir);
    return new Rover(roverBoundary, position, direction);
  }

  turnLeft() {
    this.direction.turnLeft();
  }

  turnRight() {
    this.direction.turnRight();
  }

  moveEast() {
    if (this.position.x < this.boundary.x) {
      this.position.x += 1;
    } else {
      throw new Error("The rover cannot go off its max X Boundary value");
    }
  }
  moveWest() {
    if (this.position.x > 0) {
      this.position.x -= 1;
    } else {
      throw new Error("The rover cannot go off its min X Boundary value of 0");
    }
  }

  moveNorth() {
    if (this.position.y < this.boundary.y) {
      this.position.y += 1;
    } else {
      throw new Error("The rover cannot go off its max Y Boundary value");
    }
  }

  moveSouth() {
    if (this.position.y > 0) {
      this.position.y -= 1;
    } else {
      throw new Error("The rover cannot go off its min Y Boundary value of 0");
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
