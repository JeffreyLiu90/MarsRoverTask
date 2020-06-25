class Boundary {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static create(boundary) {
    if (typeof boundary.x !== "number" || typeof boundary.y !== "number") {
      throw new Error("boundary values must be a number");
    } else if (boundary.x < 0 || boundary.y < 0) {
      throw new Error("boundary values cannot be less than 0");
    } else {
      return new Boundary(boundary.x, boundary.y);
    }
  }

  displayGrid() {
    return `${this.x} ${this.y}`;
  }
}

module.exports = Boundary;
