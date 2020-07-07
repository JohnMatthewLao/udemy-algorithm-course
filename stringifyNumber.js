let stringifyNumbers = (obj) => {
    let stringify = {}
        for(var key in obj) {
            if(typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
                stringify[key] = stringifyNumbers(obj[key])
            }else if(typeof obj[key] === 'number') {
                stringify[key] = obj[key].toString();
            }else {
                stringify[key] = obj[key]
            }
        }
    return stringify
}