const fs = require("fs");
const { ruleA, ruleB, ruleC } = require("./rules/rules.js");
const { validInput } = require("./rules/validInput.js");

let arguments = process.argv;
//we slice off the first two arguments as they reference node install path and current file location
let nums = arguments.slice(2);
if (validInput(nums)) {
  if (ruleA(nums) && ruleB(nums) && ruleC(nums)) {
    console.log("ALL rules passed");
  }
}
