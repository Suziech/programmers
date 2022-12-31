function solution(my_str, n) {
    const arr = [];
    for(let i=0; i<my_str.length/n; i++){
        arr.push(my_str.slice(i*n, i*n+n))
    }
    return arr;
}