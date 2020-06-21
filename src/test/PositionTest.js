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
  describe("#position size error", () => {
    it("throw an error if the position's X coordinate is smaller than 0", () => {
      const errorSize = () => {
        const x = -1;
        const y = 3;
        const grid = {
          x: 5,
          y: 5
        };
        return Position.create(x, y, grid);
      };

      assert.throws(errorSize, /Rover positions cannot be less than 0/);
    });
    it("throw an error if the position's Y coordinate is smaller than 0", () => {
      const errorSize = () => {
        const x = 1;
        const y = -3;
        const grid = {
          x: 5,
          y: 5
        };
        return Position.create(x, y, grid);
      };

      assert.throws(errorSize, /Rover positions cannot be less than 0/);
    });
    it("throw an error if the position's X coordinate is larger than Grid's X coordinate", () => {
      const errorSize = () => {
        const x = 6;
        const y = 3;
        const grid = {
          x: 5,
          y: 5
        };
        return Position.create(x, y, grid);
      };

      assert.throws(
        errorSize,
        /X and Y value of the rover position cannot be larger than the grid coordinates/
      );
    });
    it("throw an error if the position's Y coordinate is larger than Grid's Y coordinate", () => {
      const errorSize = () => {
        const x = 3;
        const y = 6;
        const grid = {
          x: 5,
          y: 5
        };
        return Position.create(x, y, grid);
      };

      assert.throws(
        errorSize,
        /X and Y value of the rover position cannot be larger than the grid coordinates/
      );
    });
    it("throw an error if the grid's position X is smaller than 0", () => {
      const errorSize = () => {
        const x = 3;
        const y = 6;
        const grid = {
          x: -5,
          y: 5
        };
        return Position.create(x, y, grid);
      };

      assert.throws(errorSize, /Grid coordinates cannot be less than 0/);
    });
    it("throw an error if the grid's position Y is smaller than 0", () => {
      const errorSize = () => {
        const x = 3;
        const y = 6;
        const grid = {
          x: 5,
          y: -5
        };
        return Position.create(x, y, grid);
      };

      assert.throws(errorSize, /Grid coordinates cannot be less than 0/);
    });
  });
});
