function solution(str_list) {
    const left = str_list.indexOf('l');
    const right = str_list.indexOf('r');
    if(left < 0 && right < 0) {
        return []
    } else if(left > right) {
        return right !== -1 ? str_list.slice(right+1, str_list.length) : str_list.slice(0,left)
    } else {
        return left !== -1 ? str_list.slice(0,left) : str_list.slice(right+1, str_list.length)
    }
    
    
}