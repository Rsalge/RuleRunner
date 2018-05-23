const validInput = nums => {
  for (let i = 0; i < nums.length; i++) {
    if (isNaN(nums[i])) {
      console.log(
        "Invalid Input Format, please enter only numbers followed by spaces"
      );
      return false;
    }
  }
  return true;
};

module.exports = {
  validInput
};
