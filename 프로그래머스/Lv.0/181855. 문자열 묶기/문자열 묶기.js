function solution(strArr) {
    const newStrArr = strArr.map(item => item.length);
    const max = Math.max(...newStrArr);
    const min = Math.min(...newStrArr);
    const answer = [];
    for(let i=min; i<=max; i++){
    answer.push(newStrArr.filter(item => item === i).length)
    }
    return Math.max(...answer)
}