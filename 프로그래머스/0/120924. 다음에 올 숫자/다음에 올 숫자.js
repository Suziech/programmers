function solution(common) {
    const diff = common[1] - common[0];
    const ratio = common[1] / common[0];
    
    const isArithmetic = common.every((value, idx, arr) => {
        return idx === 0 || arr[idx] - arr[idx-1] === diff
    })
    
    const isGeometric = common.every((value, idx, arr) => {
        return idx === 0 || arr[idx] / arr[idx-1] === ratio
    })
    
    if(isArithmetic) {
        return common[common.length-1] + diff
    } else {
        return common[common.length-1] * ratio
    }
}