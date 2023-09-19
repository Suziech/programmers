function solution(arr) {
    const result = [];
    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            result.push(arr[i][j] === arr[j][i])
        }
    }
    return result.includes(false) ? 0 : 1
}