class Grid {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static create(grid) {
    if (typeof grid.x !== "number" || typeof grid.y !== "number") {
      throw new Error("grid coordinates must be a number");
    } else if (grid.x < 0 || grid.y < 0) {
      throw new Error("Grid coordinates cannot be less than 0");
    } else {
      return new Grid(grid.x, grid.y);
    }
  }

  displayGrid() {
    return `${this.x} ${this.y}`;
  }
}

module.exports = Grid;
