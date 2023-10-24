function solution(a, d, included) {
    const arr = new Array(included.length).fill(a);
    const arithmeticSequence = arr.map((ele,i) => ele+i*d);
    return arithmeticSequence.filter((ele,i)=> included[i]).reduce((acc,cur)=>acc+cur)
}