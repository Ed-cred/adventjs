function manufacture(gifts, materials) {
    const result = [];
    for (const i in gifts) {
        let count = 0
        for (let char of gifts[i]) {
            if (materials.includes(char)) {
                ++count;
            }
        }
        if (count == gifts[i].length) {
            result.push(gifts[i]);
        }
    }
    return result;
}

const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';
console.log(manufacture(gifts, materials));