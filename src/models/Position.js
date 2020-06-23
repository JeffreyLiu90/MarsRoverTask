const Grid = require("../models/Grid");

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static create(x, y, gridCoord) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Position X and Y coordinate values must be a number");
    } else if (x > gridCoord.x || y > gridCoord.y) {
      throw new Error(
        "X and Y value of the rover position cannot be larger than the grid size"
      );
    } else if (x < 0 || y < 0) {
      throw new Error("X and Y value of the rover cannot be less than 0");
    } else {
      return new Position(x, y);
    }
  }

  displayPosition() {
    return `${this.x} ${this.y}`;
  }
}

module.exports = Position;
