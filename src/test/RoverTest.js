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
    it("should move forward correctly on the X axis based on the direction when given the instruction M", () => {
      const x = 1;
      const y = 2;

      const instructions = "M";
      const grid = { x: 5, y: 5 };

      roverE = Rover.create(x, y, "E", grid);
      roverW = Rover.create(x, y, "W", grid);

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
      const grid = { x: 5, y: 5 };

      roverE = Rover.create(x, y, "N", grid);
      roverW = Rover.create(x, y, "S", grid);

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
        const grid = { x: 5, y: 5 };

        const rover1 = Rover.create(x, y, direction, grid);
        const value = `${1} ${2} ${"N"}`;

        assert.equal(rover1.displayOutput(), value);
      });
    });
    describe("#error", () => {
      it("should throw an error if the Rover tries to move off the Grid size's maximum X value", () => {
        const errorMovement = () => {
          const x = 1;
          const y = 2;
          const direction = "E";
          const grid = { x: 5, y: 5 };
          const instructions = "MMMMMM";
          const rover1 = Rover.create(x, y, direction, grid);
          return rover1.processInstructions(instructions);
        };
        assert.throws(
          errorMovement,
          /The rover cannot go off the grid size's max X value/
        );
      });
      it("should throw an error if the Rover tries to move off the Grid size's maximum Y value", () => {
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
          /The rover cannot go off the grid's max Y value/
        );
      });
      it("should throw an error if the Rover tries to move off the Grid size's min Y value", () => {
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
          /The rover cannot go off the grid size's minimum Y value/
        );
      });
      it("should throw an error if the Rover tries to move off the Grid size's min X value", () => {
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
          /The rover cannot go off the grid size's min X value/
        );
      });
    });
  });
});
