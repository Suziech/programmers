const solution = s => {
    const splittedArr = s.split(' ').map(ele => ele.split(''));
    let result = [];
    for(let i=0; i<splittedArr.length; i++) {
        for(let j=0; j<splittedArr[i].length; j++){
            splittedArr[i][j] = j%2 ? splittedArr[i][j].toLowerCase() : splittedArr[i][j].toUpperCase()
        }
        result.push(splittedArr[i].join(''))
    }
    return result.join(' ')
}