function organizeGifts(gifts) {
    const sepGifts = []
    const start = 0;
    for (let i = 0; i < gifts.length; ++i) {
        if (gifts[i].toLowerCase() !== gift[i].toUpperCase()) {
           sepGifts.push(gifts.substring(start, i));
           start = i + 1;
        }
    }
}

const gifts = '76a11b';
console.log(organizeGifts(gifts));