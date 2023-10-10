function solution(my_string) {
    let str = '';
    const arr = [];
    for(let i=0; i<my_string.length; i++) {
        str = my_string.slice(i)
        arr.push(str)
    }
    return arr.sort()
}