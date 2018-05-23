// If any two sequential integers in the sequence add up to 1000 or greater
const ruleA = nums => {
  let first = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let sum = first + nums[i];
    if (sum >= 1000) {
      console.log("Rule RuleA passed");
      return true;
    }
    first = nums[i];
  }
  console.log("Rule RuleA failed");
  return false;
};

module.exports = {
  ruleA
};
