const chai = require("chai");
var assert = chai.assert;
const rules = require("../rules/rules.js");

describe("Rule C tests", function() {
  it("Should be a function", function() {
    let test = typeof rules.ruleC;
    assert.equal(test, "function");
  });
  it("Should return false for invalid input", function() {
    let res = rules.ruleC("test");
    assert.equal(res, false);
  });
});
