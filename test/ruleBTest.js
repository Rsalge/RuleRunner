const chai = require("chai");
var assert = chai.assert;
const rules = require("../rules/ruleB.js");

describe("ruleB tests", function() {
  it("Should be a function", function() {
    let test = typeof ruleA;
    assert.equal(test, "function");
  });
  it("Should return false for input that fails rule", function() {
    let res = ruleA([0, 0, 0]);
    assert.equal(res, false);
  });
  it("Should pass for a sequence that is 500 greater exactly", function() {
    let res = ruleA([0, 500]);
    assert.equal(res, true);
  });
  it("Should pass for input that is greater than 500 in a small increment", function() {
    let res = ruleA([1, 501]);
    assert.equal(res, true);
  });
  it("Should be able to handle negative values", function() {
    let res = ruleA([-1, 499, -1]);
    assert.equal(res, false);
  });
  it("Should fail for longer input containing negative and positive values", function() {
    let res = ruleA([0, 300, -100, 399, -300, 199, -201, 100, 300, 500]);
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
