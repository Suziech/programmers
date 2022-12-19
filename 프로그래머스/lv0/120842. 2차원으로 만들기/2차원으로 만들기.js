const solution = (num_list, n) => {
    let arr = [];
    for(let i=0; i<num_list.length/n; i++){
        arr = [...arr, num_list.slice(i*n, i*n+n)]
    }
    return arr
}