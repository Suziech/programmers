function solution(i, j, k) {
    str = ''
    for(let num=i; num<=j; num++){
        str += String(num)
    }
    return str.split('').filter(item => item === String(k)).length;
}