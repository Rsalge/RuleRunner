const chai = require("chai");
var assert = chai.assert;
const rules = require("../rules/rules.js");

describe("Rule B tests", function() {
  it("Should be a function", function() {
    let test = typeof rules.ruleB;
    assert.equal(test, "function");
  });
  it("Should return false for invalid input", function() {
    let res = rules.ruleB("test");
    assert.equal(res, false);
  });
});
