const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

const Plateau = require("../models/Plateau");

describe("Plateau", () => {
  describe("#Plateau Size", () => {
    it("should display Plateau size in X and Y coordinates", () => {
      const boundary = {
        x: 3,
        y: 3
      };

      const values = `${boundary.x} ${boundary.y}`;
      const plateau1 = new Plateau(boundary.x, boundary.y);
      assert.equal(plateau1.displayGrid(), values);
    });
  });
  describe("#error", () => {
    it("should throw an error if the X value are not a number", () => {
      const errorPlateau = () => {
        const boundary = {
          x: "N",
          y: 3
        };
        const plateau1 = Plateau.create(boundary);
        return plateau1;
      };

      assert.throws(errorPlateau, /boundary values must be a number/);
    });
    it("should throw an error if the Y value are not a number", () => {
      const errorPlateau = () => {
        const boundary = {
          x: 3,
          y: "N"
        };
        const plateau1 = Plateau.create(boundary);
        return plateau1;
      };

      assert.throws(errorPlateau, /boundary values must be a number/);
    });
    it("should throw an error if the X grid coordinate is less than 0", () => {
      const errorPlateau = () => {
        const boundary = {
          x: -3,
          y: 3
        };
        const plateau1 = Plateau.create(boundary);
        return plateau1;
      };

      assert.throws(errorPlateau, /boundary values cannot be less than 0/);
    });
    it("should throw an error if the Y grid coordinate is less than 0", () => {
      const errorPlateau = () => {
        const boundary = {
          x: 3,
          y: -3
        };
        const plateau1 = Plateau.create(boundary);
        return plateau1;
      };

      assert.throws(errorPlateau, /boundary values cannot be less than 0/);
    });
  });
});
