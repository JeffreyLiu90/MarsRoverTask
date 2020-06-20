const assert = require("assert");
const chai = require("chai");

const Position = require("../models/Position");

describe("Position", () => {
  describe("#display", () => {
    it("should display the correct position", () => {
      const x = 1;
      const y = 3;
      const grid = {
        x: 5,
        y: 5
      };

      const value = `${x} ${y}`;

      const position1 = Position.create(x, y, grid);
      assert.equal(position1.displayPosition(), value);
    });
  });
});
