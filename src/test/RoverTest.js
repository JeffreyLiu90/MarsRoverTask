const assert = require("assert");
const chai = require("chai");

const Rover = require("../models/Rover");

describe("Rover", () => {
  describe("#movement", () => {
    it("should turn left to the correct direction when given the instruction L", () => {
      const x = 1;
      const y = 2;

      const instructions = "L";
      const boundary = { x: 5, y: 5 };

      roverN = Rover.create(x, y, "N", boundary);
      roverS = Rover.create(x, y, "S", boundary);
      roverE = Rover.create(x, y, "E", boundary);
      roverW = Rover.create(x, y, "W", boundary);

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
      const boundary = { x: 5, y: 5 };

      roverN = Rover.create(x, y, "N", boundary);
      roverS = Rover.create(x, y, "S", boundary);
      roverE = Rover.create(x, y, "E", boundary);
      roverW = Rover.create(x, y, "W", boundary);

      const rovers = [roverN, roverS, roverE, roverW];
      const expectedValues = ["E", "W", "S", "N"];

      rovers.forEach(rover => rover.processInstructions(instructions));

      rovers.forEach((rover, index) => {
        assert.equal(rover.direction.value, expectedValues[index]);
      });
    });
    it("should move forward correctly on the X axis based on the direction when given the instruction M", () => {
      const x = 1;
      const y = 2;

      const instructions = "M";
      const boundary = { x: 5, y: 5 };

      roverE = Rover.create(x, y, "E", boundary);
      roverW = Rover.create(x, y, "W", boundary);

      const rovers = [roverE, roverW];
      const expectedValues = [2, 0];

      rovers.forEach(rover => rover.processInstructions(instructions));

      rovers.forEach((rover, index) => {
        assert.equal(rover.position.x, expectedValues[index]);
      });
    });
    it("should move forward correctly on the Y axis based on the direction when given the instruction M", () => {
      const x = 1;
      const y = 2;

      const instructions = "M";
      const boundary = { x: 5, y: 5 };

      roverE = Rover.create(x, y, "N", boundary);
      roverW = Rover.create(x, y, "S", boundary);

      const rovers = [roverE, roverW];
      const expectedValues = [3, 1];

      rovers.forEach(rover => rover.processInstructions(instructions));

      rovers.forEach((rover, index) => {
        assert.equal(rover.position.y, expectedValues[index]);
      });
    });
    describe("#display", () => {
      it("should display the Rover's current position", () => {
        const x = 1;
        const y = 2;
        const direction = "N";
        const boundary = { x: 5, y: 5 };

        const rover1 = Rover.create(x, y, direction, boundary);
        const value = `${1} ${2} ${"N"}`;

        assert.equal(rover1.displayOutput(), value);
      });
    });
    describe("#error", () => {
      it("should throw an error if the Rover tries to move off its max Boundary X value", () => {
        const errorMovement = () => {
          const x = 1;
          const y = 2;
          const direction = "E";
          const boundary = { x: 5, y: 5 };
          const instructions = "MMMMMM";
          const rover1 = Rover.create(x, y, direction, boundary);
          return rover1.processInstructions(instructions);
        };
        assert.throws(
          errorMovement,
          /The rover cannot go off its max X Boundary value/
        );
      });
      it("should throw an error if the Rover tries to move off its max Y Boundary value", () => {
        const errorMovement = () => {
          const x = 1;
          const y = 2;
          const direction = "N";
          const grid = { x: 5, y: 5 };
          const instructions = "MMMMM";
          const rover1 = Rover.create(x, y, direction, grid);
          return rover1.processInstructions(instructions);
        };
        assert.throws(
          errorMovement,
          /The rover cannot go off its max Y Boundary value/
        );
      });
      it("should throw an error if the Rover tries to move off its min Y Boundary value of 0", () => {
        const errorMovement = () => {
          const x = 1;
          const y = 2;
          const direction = "S";
          const grid = { x: 5, y: 5 };
          const instructions = "MMMMM";
          const rover1 = Rover.create(x, y, direction, grid);
          return rover1.processInstructions(instructions);
        };
        assert.throws(
          errorMovement,
          /The rover cannot go off its min Y Boundary value of 0/
        );
      });
      it("should throw an error if the Rover tries to move off its min Y Boundary value of 0", () => {
        const errorMovement = () => {
          const x = 1;
          const y = 2;
          const direction = "W";
          const grid = { x: 5, y: 5 };
          const instructions = "MMMMM";
          const rover1 = Rover.create(x, y, direction, grid);
          return rover1.processInstructions(instructions);
        };
        assert.throws(
          errorMovement,
          /The rover cannot go off its min X Boundary value of 0/
        );
      });
    });
  });
});
