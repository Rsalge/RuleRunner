const ruleC = nums => {
  let avg = 0;
  for (let i = 0; i < nums.length; i++) {
    avg += nums[i];
  }
  console.log("TOTAL: ", avg);

  avg /= nums.length;
  console.log("avg: ", avg);

  if (avg >= 500) {
    console.log("Rule RuleC passed");
    return true;
  }
  console.log("Rule RuleC failed");
  return false;
};

module.exports = {
  ruleC
};
