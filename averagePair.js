function averagePair(numbers, average){
    // add whatever parameters you deem necessary - good luck!
    let sum = average * 2
    let min = 0;
    let max = numbers.length-1
    if(numbers.length <=1) {
        return false;
    }
    while(min != max) {
        if(numbers[min] + numbers[max] === sum){
          return true  
        }else if(numbers[min] + numbers[max] > sum){
            max = max -1
        }else {
            min = min +1
        }
    }
    return false
  }