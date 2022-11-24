const solution= numbers => {
    const arr = [];
    const sort = numbers.sort((a,b)=>b-a)
    arr.push(sort[0]*sort[1])
    arr.push(sort[sort.length-1]*sort[sort.length-2])
    return Math.max(arr[0], arr[1])
}