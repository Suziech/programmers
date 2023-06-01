// function solution(num_list) {
//     var answer = 0;
//     return answer;
// }

const solution = num_list => num_list.reduce((acc,cur)=>acc*cur) < num_list.reduce((acc,cur)=>acc+cur)**2 ? 1 : 0