const firstDupe = (gifts) => {
    const dict = {};
    for(const [i,v] of gifts.entries()) {
        if(dict.hasOwnProperty(v)){
            return dict[v];
        }
        dict[v] = i;

    }
    return -1;
};
arr = [1, 3, 5, 1, 3];
console.log(firstDupe(arr));