// const Grid = require("../models/Grid");

// class Position {
//   constructor(x, y, grid) {
//     this.x = x;
//     this.y = y;
//     this.grid = grid;
//   }

//   static create(x, y, gridCoord) {
//     const gridX = gridCoord.x;
//     const gridY = gridCoord.y;
//     const grid = new Grid(gridX, gridY);
//     if (gridX < 0 || gridY < 0) {
//       throw new Error("Grid coordinates cannot be less than 0");
//     } else if (x > gridX || y > gridY) {
//       throw new Error(
//         "X and Y value of the rover position cannot be larger than the grid coordinates"
//       );
//     } else if (x < 0 || y < 0) {
//       throw new Error("Rover positions cannot be less than 0");
//     } else {
//       return new Position(x, y, grid);
//     }
//   }

//   displayPosition() {
//     return `${this.x} ${this.y}`;
//   }
// }
// // const x = 1;
// // const y = 3;

// // const grid = {
// //   x: 5,
// //   y: -5
// // };

// // rover1 = Position.create(x, y, grid);
// // console.log(rover1);

// module.exports = Position;

////////////////////////////////////////////////////

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
