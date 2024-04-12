function solution(arr, k) {
    const uniqueArr = [...new Set(arr)];
    uniqueArr.length = k;
    
    for(let i=0; i<uniqueArr.length; i++){
        if(uniqueArr[i] === undefined){
            uniqueArr[i] = -1
        }
    }
    return uniqueArr
}