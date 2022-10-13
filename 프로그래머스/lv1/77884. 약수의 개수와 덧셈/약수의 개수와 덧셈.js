function solution(left, right) {
let count = 0;
    for(let i=left; i<right+1; i++){
       Math.sqrt(i) === Math.floor(Math.sqrt(i))?
         count += i*-1: count += i*1;
    }
    return count;
}