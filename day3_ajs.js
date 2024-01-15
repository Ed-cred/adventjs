function findStep(original, modified) {

    if (original.length === modified.length) {
        return "";
    } 
    let largeStr = original.length > modified.length ? original : modified;
    let smallStr = original.length < modified.length ? original : modified;
    let smallStrSum = 0;
    let largeStrSum = 0;
    let minLength = Math.min(original.length, modified.length);
    for(let i = 0; i < minLength; ++i) {

        smallStrSum += smallStr[i].charCodeAt(0);
        largeStrSum += largeStr[i].charCodeAt(0);
    }
    largeStrSum += largeStr[largeStr.length-1].charCodeAt(0);

    return String.fromCharCode(largeStrSum - smallStrSum);
}

original = 'iiiii';
modified = 'iiiii';
console.log(findStep(original, modified));
console.log(findStep('stepfor', 'stepor'));

