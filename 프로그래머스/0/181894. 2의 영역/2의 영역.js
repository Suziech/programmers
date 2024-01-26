function solution(arr) {
    let indices = arr.map((ele, i) => ele === 2 ? i : -1).filter(i => i !== -1)
    console.log('indices', indices)
    
    if(indices.length === 0) {
        return [-1];
    }
    
    let [start, end] = [Math.min(...indices), Math.max(...indices)+1]
    return arr.slice(start, end)
}