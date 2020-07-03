function maxSubarraySum(nums,l){
    // add whatever parameters you deem necessary - good luck!
    if(nums.length < l) {
        return null;
    }
    let max = 0;
    for(var i = 0 ; i < l ; i++) {
        max = max + nums[i];
    }
    let localmax = max
    for(var i = l ; i < nums.length ; i++) {
        localmax = localmax + nums[i] - nums[i-l]
        max = Math.max(localmax,max);
    }
    return max
  }