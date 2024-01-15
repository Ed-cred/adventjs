function drawGift(size, symbol) {
    let space = size;
    let first = " ".repeat(--space) + "#".repeat(size) + "\n";
    if (size <= 1) return first;
    let second = "";

    for (let i = 1; i < size - 1; ++i) {
        first += " ".repeat(--space) + "#".padEnd(size - 1, symbol) + "#".padEnd(i, symbol) + "#\n";
        second += "#" + symbol.repeat(size - 2) + "#".padEnd(size - i - 1, symbol) + "#\n";
    }
    const middle = "#".repeat(size) + symbol.repeat(size - 2) + "#\n";
    return first + middle + second + "#".repeat(size) + "\n";
}

console.log(drawGift(4, "+"));
console.log(drawGift(5, "*"));
