function cyberReindeer(road, time) {
    const roadState = [road];
    let sledPos = road.indexOf('S');
    let replacedChar = ".";
    for(let i = 0; i < time - 1; ++i) {
        let currState = roadState[i];
        if (i == 4) {
            currState = currState.replaceAll("|", "*");
        }
        if(currState[sledPos + 1] !== '|') {
            const newSledPos = `${replacedChar}S`;
            replacedChar = currState[sledPos + 1];
            const firstRoadPiece = currState.substring(0, sledPos);
            const lastRoadPiece = currState.substring(sledPos + 2);
            currState = firstRoadPiece + newSledPos + lastRoadPiece;
            sledPos += 1;
        }
        roadState.push(currState);
    }
    return roadState;
}

const road = "S..|...|..";
const time = 10;
console.log(cyberReindeer(road, time));
