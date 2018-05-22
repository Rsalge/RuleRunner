const chai = require("chai");
var assert = chai.assert;
const rule = require("../rules/rules.js");

describe("simple function", function() {
  it("Should return true", function() {
    let test = rule.test();
    assert.equal(test, true);
  });
});
