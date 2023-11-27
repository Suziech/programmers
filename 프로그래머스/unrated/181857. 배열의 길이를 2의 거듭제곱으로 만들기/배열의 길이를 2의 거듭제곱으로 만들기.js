function solution(arr) {
    while(Math.log2(arr.length)%1 > 0){
        arr.push(0)
    }
    return arr
}