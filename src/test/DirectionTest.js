const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

const Direction = require("../models/Direction");

describe("Direction", () => {
  describe("#value", () => {
    it("should have a directional value", () => {
      const value = "N";
      const direction = new Direction(value);

      assert.equal(direction.value, value);
    });
    it("should throw an error if wrong directional value is given", () => {
      const newDirection = () => {
        const direction = "Z";
        return Direction.create(direction);
      };

      assert.throws(newDirection, "this is not a valid direction");
      // Direction.create(direction).should.throw(
      //   Error,
      //   "This is not a valid direction"
      // );

      // (function() {
      //   new Direction(direction);
      // }.should.throw(Error, "This is not a valid direction"));

      // dir.should.throw(Error("This is not a valid direction"));
      // should.Throw(() => new Direction(direction), Error);

      // expect(
      //   Direction.create(direction).to.throw(
      //     new Error("This is not a valid direction")
      //   )
      // );
    });
  });
  describe("#turn right", () => {
    it("should have the right value after turning right", () => {
      const directionN = new Direction("N");
      const directionS = new Direction("S");
      const directionE = new Direction("E");
      const directionW = new Direction("W");

      const directions = [directionN, directionS, directionE, directionW];

      directions.forEach(dir => dir.turnRight());

      const actualValues = directions.map(dir => dir.value);
      const expectedValues = ["E", "W", "S", "N"];

      actualValues.forEach((actualValue, index) => {
        assert.equal(actualValue, expectedValues[index]);
      });
    });
  });
  describe("#turn left", () => {
    it("should have the right value after turning left", () => {
      const directionN = new Direction("N");
      const directionS = new Direction("S");
      const directionE = new Direction("E");
      const directionW = new Direction("W");

      const directions = [directionN, directionS, directionE, directionW];

      directions.forEach(dir => dir.turnLeft());

      const actualValues = directions.map(dir => dir.value);
      const expectedValues = ["W", "E", "N", "S"];
      actualValues.forEach((actualValue, index) => {
        assert.equal(actualValue, expectedValues[index]);
      });
    });
  });
});
