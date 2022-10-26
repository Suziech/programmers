const solution = numbers => {
    const firstMax = numbers.sort((a,b)=>a-b).pop();
    const secondMax = numbers.pop();
    return firstMax*secondMax
}