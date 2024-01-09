function findStep(original, modified) {
    let smallStr;
    let largeStr; if (original.length === modified.length) {
        return "";
    } 
    if (original.length < modified.length) {
        smallStr = original;
        largeStr = modified;
    } else {
        smallStr = modified;
        largeStr = original
    }
    let smallStrSum = 0;
    let largeStrSum = 0;
    for(let i = 0; i < smallStr.length; ++i) {
        smallStrSum += smallStr[i].charCodeAt(0);
        largeStrSum += largeStr[i].charCodeAt(0);
    }
    largeStrSum += largeStr[largeStr.length-1].charCodeAt(0);
    return String.fromCharCode(largeStrSum - smallStrSum)
}

original = 'iiiii';
modified = 'iiiii';
console.log(findStep(original, modified));