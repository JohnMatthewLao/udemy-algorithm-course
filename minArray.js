// solution 1 O(n^2)
function minSubArrayLen(nums,len){
    debugger;
    let min = Infinity;
    for(var i = 0 ; i < nums.length; i++) {
        let sum = nums[i]
        let amount = 1;
        if(sum >= len) {
            min = Math.min(amount, min)
        }
        for(var j = i+1 ; j < nums.length; j++) {
            amount +=1
            sum += nums[j]
            if(sum >= len){
                min = Math.min(amount, min)
                break;
            }
        }
    }
    if(min === Infinity) {
        return 0;
    }else{
        return min
    }
}

// solution 2 O(n)
function minSubArrayLen(array, total){
    let minLen = Infinity;
    let start = 0;
    let end = 0;
    let localTotal = 0;
    while(start < array.length) { 
        debugger;   
        if(end < array.length && total > localTotal) {
            localTotal += array[end]
            end++
        } else if (total <= localTotal) {
            minLen = Math.min(minLen,end-start)
            localTotal -=array[start]
            start++
        } else {
            break;
        }
    }
    return minLen === Infinity? 0 : minLen
}

console.log(minSubArrayLen([2,3,1,2,4,3],7));