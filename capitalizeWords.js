function capitalizeWords (array) {
    // add whatever parameters you deem necessary - good luck!
    if(array.length ===0) {
        return [];
    }
    return [].concat(array[0].toUpperCase()).concat(capitalizeWords(array.slice(1)))
  }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']