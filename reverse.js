function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    debugger;
    if(str.length ===0){
        return '';
    }
    return str[str.length-1] + reverse(str.slice(0,str.length-1))
  }
  

console.log(reverse('awesome')) // 'emosewa'
