const solution = n => {
    let compareNum = 1;
    const arr = [];
    for(let i=1; i<11; i++){
        compareNum = compareNum*i
        arr.push(compareNum);
    }
    return arr.filter(ele => ele <= n).length;
}