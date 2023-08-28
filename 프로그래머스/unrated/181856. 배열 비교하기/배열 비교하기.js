function solution(arr1, arr2) {
    if(arr1.length === arr2.length){
        const one = arr1.reduce((acc,cur)=>acc+cur)
        const two = arr2.reduce((acc,cur)=>acc+cur)
        
        return one === two ? 0
        : one > two ? 1: -1
    } else {
        return arr1.length > arr2.length ? 1 : -1
    }
}