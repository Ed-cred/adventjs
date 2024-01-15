function organizeGifts(gifts) {
    let result = [];
    const sepGifts = []
    const letters = [];
    let start = 0;
    for (let i = 0; i < gifts.length; ++i) {
        if (gifts[i].toLowerCase() !== gifts[i].toUpperCase()) {
           sepGifts.push(gifts.substring(start, i));
           letters.push(gifts.substring(i, i+1));
           start = i + 1;
        }
    }
    console.log(letters);
    for (let i = 0; i < sepGifts.length; ++i) {
        let tempGifts = [];
        const currLetter = letters[i];
        let currNum = parseInt(sepGifts[i]);
        while (currNum - 10 >= 0) {
            if (tempGifts.length === 5) {
                result.push(`[${currLetter}]`);
                tempGifts.splice(0, tempGifts.length);
            }
            tempGifts.push(`{${currLetter}}`);
            currNum -= 10;
        }
        if (tempGifts.length === 5) {
            result.push(`[${currLetter}]`);
            tempGifts.splice(0, tempGifts.length);
        }
        result.push(tempGifts.join(""));
        if (currNum > 0) {
            let remainder = "(".padEnd(currNum + 1, currLetter) + ")";
            result.push(remainder);
        }
    }
    return result.join(""); 
}

const gifts = '76a11b';
console.log(organizeGifts(gifts));