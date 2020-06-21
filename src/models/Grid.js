class Grid {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  displayGrid() {
    return `${this.x} ${this.y}`;
  }
}

module.exports = Grid;
