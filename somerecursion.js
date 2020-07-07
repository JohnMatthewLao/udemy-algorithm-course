function someRecursive(array,callback){
    // add whatever parameters you deem necessary - good luck!
    if(array.length === 0) {
        return false
    }
    if(callback(array[0])){
        return true
    }
    return someRecursive(array.slice(1),callback)
  }