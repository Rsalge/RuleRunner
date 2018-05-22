const chai = require("chai");
var assert = chai.assert;
const rules = require("../rules/rules.js");

describe("ruleA tests", function() {
  it("Should be a function", function() {
    let test = typeof rules.ruleA;
    assert.equal(test, "function");
  });
  it("Should return false for invalid input", function() {
    let res = rules.ruleA("test");
    assert.equal(res, false);
  });
  it("Should return false for input that fails rule", function() {
    let res = rules.ruleA([0, 0, 0]);
    assert.equal(res, false);
  });
  it("Should return true for input that passes rule", function() {
    let res = rules.ruleA([0, 1000]);
    assert.equal(res, false);
  });
});
