const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

const Boundary = require("../models/Boundary");

describe("Boundary", () => {
  describe("#Grid Size", () => {
    it("should display grid size in X and Y coordinates", () => {
      const boundary = {
        x: 3,
        y: 3
      };

      const values = `${boundary.x} ${boundary.y}`;
      const boundary1 = new Boundary(boundary.x, boundary.y);
      assert.equal(boundary1.displayGrid(), values);
    });
  });
  describe("#error", () => {
    it("should throw an error if the X value are not a number", () => {
      const errorBoundary = () => {
        const boundary = {
          x: "N",
          y: 3
        };
        const boundary1 = Boundary.create(boundary);
        return boundary1;
      };

      assert.throws(errorBoundary, /boundary values must be a number/);
    });
    it("should throw an error if the Y value are not a number", () => {
      const errorBoundary = () => {
        const boundary = {
          x: 3,
          y: "N"
        };
        const boundary1 = Boundary.create(boundary);
        return boundary1;
      };

      assert.throws(errorBoundary, /boundary values must be a number/);
    });
    it("should throw an error if the X grid coordinate is less than 0", () => {
      const errorBoundary = () => {
        const boundary = {
          x: -3,
          y: 3
        };
        const boundary1 = Boundary.create(boundary);
        return boundary1;
      };

      assert.throws(errorBoundary, /boundary values cannot be less than 0/);
    });
    it("should throw an error if the Y grid coordinate is less than 0", () => {
      const errorBoundary = () => {
        const boundary = {
          x: 3,
          y: -3
        };
        const boundary1 = Boundary.create(boundary);
        return boundary1;
      };

      assert.throws(errorBoundary, /boundary values cannot be less than 0/);
    });
  });
});
