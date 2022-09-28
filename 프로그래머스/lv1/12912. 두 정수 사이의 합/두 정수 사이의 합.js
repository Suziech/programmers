function solution(a, b) {
    if (a === b) {
        return a
    }
    
    let addNum = 0;
    if (a < b) {
        for(let i=a; i<b+1; i++){
            addNum += i;
        }
        return addNum;
    } else {
        for(let i=b; i<a+1; i++){
            addNum += i;
        }
        return addNum;
    }
}
