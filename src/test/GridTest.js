const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

const Grid = require("../models/Grid");

describe("Grid", () => {
  describe("#Grid Size", () => {
    it("should display grid size in X and Y coordinates", () => {
      const grid = {
        x: 3,
        y: 3
      };

      const values = `${grid.x} ${grid.y}`;
      const grid1 = new Grid(grid.x, grid.y);
      assert.equal(grid1.displayGrid(), values);
    });
  });
  describe("#error", () => {
    it("should throw an error if the X value are not a number", () => {
      const errorGrid = () => {
        const grid = {
          x: "N",
          y: 3
        };
        const grid1 = Grid.create(grid);
        return grid1;
      };

      assert.throws(errorGrid, /grid coordinates must be a number/);
    });
    it("should throw an error if the Y value are not a number", () => {
      const errorGrid = () => {
        const grid = {
          x: 3,
          y: "N"
        };
        const grid1 = Grid.create(grid);
        return grid1;
      };

      assert.throws(errorGrid, /grid coordinates must be a number/);
    });
    it("should throw an error if the X grid coordinate is less than 0", () => {
      const errorGrid = () => {
        const grid = {
          x: -3,
          y: 3
        };
        const grid1 = Grid.create(grid);
        return grid1;
      };

      assert.throws(errorGrid, /Grid coordinates cannot be less than 0/);
    });
    it("should throw an error if the Y grid coordinate is less than 0", () => {
      const errorGrid = () => {
        const grid = {
          x: 3,
          y: -3
        };
        const grid1 = Grid.create(grid);
        return grid1;
      };

      assert.throws(errorGrid, /Grid coordinates cannot be less than 0/);
    });
  });
});
