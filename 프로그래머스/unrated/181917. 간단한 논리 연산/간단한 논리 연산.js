function solution(x1, x2, x3, x4) {
    let x1x2 = true;
    let x3x4 = true;
    
    x1 !== x2 ? x1x2 = true :
    x1 === false || x2 === false ? x1x2 = false: x1x2 = true;
    
    x3 !== x4 ? x3x4 = true :
    x3 === false || x4 === false ? x3x4 = false: x3x4 = true;
    
    return x1x2 !== x3x4 ? false : x1x2;
}