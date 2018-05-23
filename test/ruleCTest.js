const chai = require("chai");
var assert = chai.assert;
const { ruleC } = require("../rules/ruleC.js");

describe("ruleC tests", function() {
  it("Should be a function", function() {
    let test = typeof ruleC;
    assert.equal(test, "function");
  });
  it("Should return false for input that fails rule", function() {
    let res = ruleC([0, 0, 0]);
    assert.equal(res, false);
  });
  it("Should pass for a sequence that has an average of 500 exactly", function() {
    let res = ruleC([501, 500, 500, 499]);
    assert.equal(res, true);
  });
  it("Should pass for input that has an average greater than 500 in large increments", function() {
    let res = ruleC([0, 5000, 0, 0, 0, 0, 0, 0, 0, 0]);
    assert.equal(res, true);
  });
  it("Should be able to handle negative values", function() {
    let res = ruleC([0, 1000, -2000, 4000, -500]);
    assert.equal(res, true);
  });
  it("Should fail for longer input containing negative and positive values", function() {
    let res = ruleC([0, 300, -100, 399, -300, 199, -201, 100, 300, 500]);
    assert.equal(res, false);
  });
  it("Should pass for longer input containing negative and positive values", function() {
    let res = ruleC([
      501,
      499,
      502,
      498,
      503,
      497,
      510,
      490,
      520,
      480,
      550,
      450,
      600,
      400
    ]);
    assert.equal(res, true);
  });
});
