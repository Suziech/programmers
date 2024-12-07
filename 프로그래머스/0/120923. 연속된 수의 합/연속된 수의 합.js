function solution(num, total) {
    let firstNum = (total/num) - ((num-1)/2);
    return Array.from({length:num}, (_,i)=>firstNum+i)
}