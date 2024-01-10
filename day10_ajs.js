function createChristmasTree(ornaments, height) {
    let tree = "";
    const countOrnaments = (height * (height + 1)) / 2;
    const allOrnaments = ornaments.repeat(countOrnaments);
    let lastIdx = 0;
    for (let i = 1; i <= height; ++i) {
        const spaces = " ".repeat(height - i);
        const ornamentRow = allOrnaments
        .slice(lastIdx, lastIdx + i)
        .split("")
        .join(" ");
        lastIdx += i;
        tree += spaces + ornamentRow + "\n";
    }
    let base = " ".repeat(height - 1) + "|\n";
    tree += base;
    return tree;
}

console.log(createChristmasTree("123", 4));
console.log(createChristmasTree("*@o", 3));
