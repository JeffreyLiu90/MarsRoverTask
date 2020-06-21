const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

const Grid = require("../models/Grid");

describe("Grid", () => {
  describe("#Grid Position", () => {
    it("should display grid coordinates", () => {
      const grid = {
        x: 3,
        y: 3
      };

      const values = `${grid.x} ${grid.y}`;
      const rover1 = new Grid(grid.x, grid.y);
      assert.equal(rover1.displayGrid(), values);
    });
  });
});
