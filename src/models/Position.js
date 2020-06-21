const Grid = require("../models/Grid");

class Position {
  constructor(x, y, grid) {
    this.x = x;
    this.y = y;
    this.grid = grid;
  }

  static create(x, y, gridCoord) {
    const gridX = gridCoord.x;
    const gridY = gridCoord.y;
    const grid = new Grid(gridX, gridY);
    if (gridX < 0 || gridY < 0) {
      throw new Error("Grid coordinates cannot be less than 0");
    } else if (x > gridX || y > gridY) {
      throw new Error(
        "X and Y value of the rover position cannot be larger than the grid coordinates"
      );
    } else if (x < 0 || y < 0) {
      throw new Error("Rover positions cannot be less than 0");
    } else {
      return new Position(x, y, grid);
    }
  }

  displayPosition() {
    return `${this.x} ${this.y}`;
  }
}

const grid = {
  x: 5,
  y: 5
};

module.exports = Position;
