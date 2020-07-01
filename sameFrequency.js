function sameFrequency(num1,num2){
    // good luck. Add any arguments you deem necessary.
    let counter1 = {}
    let counter2 = {}
    num1 = num1.toString();
    num2 = num2.toString();
    if(num1.length !== num2.length) {
        return false;
    }
    for(var i = 0 ; i < num1.length ; i++) {
        let firstNumberDigit = num1[i]
        let secondNumberDigit = num2[i]
        if(counter1[firstNumberDigit] === undefined){
            counter1[firstNumberDigit] = 1;
        } else {
          counter1[firstNumberDigit] ++  
        }
        
        if(counter2[secondNumberDigit] === undefined){
          counter2[secondNumberDigit] = 1;
        } else {
          counter2[secondNumberDigit] ++  
        }
    }
    for(var key in counter1) {
        if(counter1[key] !== counter2[key]){
            return false
        }
    }
    return true
  }


  console.log(sameFrequency(2111,1312))