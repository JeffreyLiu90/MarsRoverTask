const Rover = require("../src/models/Rover");

const instructions = "LMLMLMLMM";
const instructions2 = "MMM";

const roverBoundary = {
  x: 5,
  y: 5
};

const rover1 = Rover.create(1, 2, "N", roverBoundary);
console.log("rover1: ", rover1);
console.log("rover1 display: ", rover1.displayOutput());
rover1.processInstructions(instructions);
console.log("rover1 display final: ", rover1.displayOutput());

const rover2 = Rover.create(3, 3, "S", roverBoundary);
console.log("rover2: ", rover2);
console.log("rover2 display: ", rover2.displayOutput());
rover2.processInstructions(instructions2);
console.log("rover2 display final: ", rover2.displayOutput());
