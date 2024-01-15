function manufacture(gifts, materials) {
    const result = [];
    for (const i in gifts) {
        for (let char of gifts[i]) {
            if (!materials.includes(char)) {
                return result;
            }
        }
        result.push(gifts[i]);
    }
    return result;
}

const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';
console.log(manufacture(gifts, materials));