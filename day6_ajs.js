function maxDistance(movements) {
    if (movements.length === 0) {
        return 0;
    }
    let result = 0;
    let direction =  movements.at(0);
    for (let i = 0; i < movements.length; ++i) {
        if (movements[i] === direction || movements[i] === '*') {
            ++result;
        } else {
            --result;
        }
    }
    return result;
}

const mov = "<<<>";
console.log(maxDistance(mov));
const mov2 = ">***>";
console.log(maxDistance(mov2));
