const solution = (arr, n) => {
    if(arr.length%2) {
        return arr.map((num,idx) => idx%2 ? num : num+n)
    } else {
        return arr.map((num,idx) => idx%2 ? num+n : num)
    }
}