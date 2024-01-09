function organizeGifts(gifts) {
    let result = "";
    const sepGifts = []
    let start = 0;
    for (let i = 0; i < gifts.length; ++i) {
        if (gifts[i].toLowerCase() !== gifts[i].toUpperCase()) {
           sepGifts.push(gifts.substring(start, i + 1));
           start = i + 1;
        }
    }
    // for (const giftType of sepGifts) {
    //     let arr = "";
    //     while (giftType % 10 === 0) {
    //     }
    // }
    console.log(sepGifts);
}

const gifts = '76a11b';
console.log(organizeGifts(gifts));