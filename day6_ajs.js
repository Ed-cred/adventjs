function maxDistance(movements) {
    if (movements.length === 0) {
        return 0;
    }
    let result = 0;
    directions = {
        "<": 0,
        ">": 0,
        "*": 0
    }
    for (const mv of movements) {
        directions[mv] += 1;
    }
    result = Math.abs(directions["<"] - directions[">"]) + directions["*"]
    return result;
}

const mov = "<<<>";
console.log(maxDistance(mov));
const mov2 = ">***>";
console.log(maxDistance(mov2));
