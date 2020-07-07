const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

let collectStrings = (obj) =>{
    let array = []
    let recursion = (obj) => {
        for(var key in obj){
            if(typeof obj[key] === 'string'){
                array.push(obj[key])
            }
            if(typeof obj[key] === 'object' && !Array.isArray(obj[key] && obj[key] !==null) ){
                recursion(obj[key])
            }
        }
    }
    recursion(obj)
    return array;
}

collectStrings(obj) // ["foo", "bar", "baz"])