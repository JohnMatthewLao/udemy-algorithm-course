function capitalizeFirst (array) {
    // add whatever parameters you deem necessary - good luck!
    debugger;
    if(array.length === 0) {
        return [];
    }
    let word = array[0];
    word = word[0].toUpperCase() + word.substring(1);
    return [].concat(word).concat(capitalizeFirst(array.slice(1)))
  }

  console.log(capitalizeFirst(['dog','cat','meow']))
  