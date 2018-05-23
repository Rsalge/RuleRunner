const chai = require("chai");
var assert = chai.assert;
const { ruleA } = require("../rules/ruleA.js");

describe("ruleA tests", function() {
  it("Should be a function", function() {
    let test = typeof ruleA;
    assert.equal(test, "function");
  });
  it("Should return false for input that fails rule", function() {
    let res = ruleA([0, 0, 0]);
    assert.equal(res, false);
  });
  it("Should pass for a sequence that adds up to 1000 exactly", function() {
    let res = ruleA([0, 1000]);
    assert.equal(res, true);
  });
  it("Should pass for input that reaches 1000 in a small increment", function() {
    let res = ruleA([0, 999, 1]);
    assert.equal(res, true);
  });
  it("Should fail for input with negative values", function() {
    let res = ruleA([0, 999, -1]);
    assert.equal(res, false);
  });
  it("Should fail for longer input containing negative and positive values", function() {
    let res = ruleA([0, 999, -100, 1099, -300, 1200, -201, 100, 300, 500]);
    assert.equal(res, false);
  });
  it("Should pass for longer input containing negative and positive values", function() {
    let res = ruleA([
      0,
      999,
      -100,
      1099,
      -300,
      1200,
      -201,
      100,
      300,
      500,
      0,
      999,
      -100,
      1099,
      -300,
      1200,
      -201,
      100,
      300,
      500,
      500
    ]);
    assert.equal(res, true);
  });
});
