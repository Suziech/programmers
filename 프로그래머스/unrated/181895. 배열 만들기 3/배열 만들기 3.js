function solution(arr, intervals) {
    const result = [];
    for(let i=0; i<intervals.length; i++){
    let ele = arr.slice(intervals[i][0], intervals[i][1]+1)
    result.push(ele)
}

return result[0].concat(result[1]);
}