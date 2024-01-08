const firstDupe = (gifts) => {
    const dict = {};
    for(const [i,v] of gifts.entries()) {
        if(dict.hasOwnProperty(v)){
            return v;
        }
        dict[v] = i;
    }
    return -1;
};