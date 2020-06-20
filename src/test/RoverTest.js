const assert = require("assert");
const chai = require("chai");

const Rover = require("../models/Rover");

describe("Rover", () => {
  describe("#movement", () => {
    it("should turn left to the correct direction when given the instruction L", () => {
      const x = 1;
      const y = 2;

      const instructions = "L";
      const grid = { x: 5, y: 5 };

      roverN = Rover.create(x, y, "N", grid);
      roverS = Rover.create(x, y, "S", grid);
      roverE = Rover.create(x, y, "E", grid);
      roverW = Rover.create(x, y, "W", grid);

      const rovers = [roverN, roverS, roverE, roverW];
      const expectedValues = ["W", "E", "N", "S"];

      rovers.forEach(rover => rover.processInstructions(instructions));

      rovers.forEach((rover, index) => {
        assert.equal(rover.direction.value, expectedValues[index]);
      });
    });
    it("should turn right to the correct direction when given the instruction R", () => {
      const x = 1;
      const y = 2;

      const instructions = "R";
      const grid = { x: 5, y: 5 };

      roverN = Rover.create(x, y, "N", grid);
      roverS = Rover.create(x, y, "S", grid);
      roverE = Rover.create(x, y, "E", grid);
      roverW = Rover.create(x, y, "W", grid);

      const rovers = [roverN, roverS, roverE, roverW];
      const expectedValues = ["E", "W", "S", "N"];

      rovers.forEach(rover => rover.processInstructions(instructions));

      rovers.forEach((rover, index) => {
        assert.equal(rover.direction.value, expectedValues[index]);
      });
    });
  });
});
