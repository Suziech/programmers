function solution(myStr) {
    const result = myStr.split('a').map(item => item.split('b').map(item => item.split('c'))).filter(item => item.join('')).flat(2).filter(item => item.length>0)
    return result.length === 0 ? ['EMPTY'] : result;
}