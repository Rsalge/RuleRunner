const fs = require("fs");
const rules = require("./rules.js");

let arguments = process.argv;

console.log("Argurments", arguments);

let nums = arguments.slice(2);

console.log("Numbers: ", nums);

const validInput = nums => {
  for (let i = 0; i < nums.length; i++) {
    if (isNaN(nums[i])) {
      console.log(
        "Invalid Input Format, please enter only numbers followed by spaces"
      );
      return false;
    }
  }
  return true;
};

if (validInput(nums)) {
  console.log("Valid Input");
}
