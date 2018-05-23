const validInput = nums => {
  for (let i = 0; i < nums.length; i++) {
    if (isNaN(nums[i])) {
      console.log(
        "Invalid Input Format, please enter only numbers followed by spaces"
      );
      return false;
    }
    //modify input here for future logic, otherwise numbers are interpreted as strings
    nums[i] = Number(nums[i]);
  }
  return true;
};

module.exports = {
  validInput
};
