function solution(num_list) {
    let even = num_list.filter((num) => num%2 === 0).join('');
    let odd = num_list.filter((num)=> num%2 !==0).join('');
    return Number(even) + Number(odd)
}