function createChristmasTree(ornaments, height) {
    let tree = "";
    const allOrnaments = ornaments
    .repeat((height * (height + 1)) / 2);
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
    tree += " ".repeat(height - 1) + "|\n";
    return tree;
}
console.log(createChristmasTree("123", 4));
console.log(createChristmasTree("*@o", 3));