const chai = require("chai");
var assert = chai.assert;
const { validInput } = require("../rules/validInput.js");

describe("validInput tests", function() {
  it("Should be a function", function() {
    let res = typeof validInput;
    assert.equal(res, "function");
  });
  it("Should return false for null input", function() {
    let res = validInput("test");
    assert.equal(res, false);
  });
  it("Should return false for input that contains an element that is not a number", function() {
    let res = validInput([0, "car", 0]);
    assert.equal(res, false);
  });
});
