function isSubsequence(str1,str2) {
    // good luck. Add any arguments you deem necessary.
    let start = 0;
    for(var i = 0 ; i < str2.length ; i++){
      if(str2[i] === str1[start]){
          start = start + 1;
          if(start === str1.length) {
              return true;
          }
      }
    }
  }