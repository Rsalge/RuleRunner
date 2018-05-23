const ruleB = nums => {
  let left = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - left;
    if (diff >= 500) {
      console.log("Rule RuleB passed");
      return true;
    }
    left = nums[i];
  }
  console.log("Rule RuleB failed");
  return false;
};

module.exports = {
  ruleB
};
