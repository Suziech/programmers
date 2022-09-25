function solution(n) {
//     let ternary = n.toString(3).split('').reverse();
//     console.log(ternary);
//     let toNumber = ternary.join('');
//     console.log(toNumber);
//     let decimal = parseInt(toNumber,3);

    
//     console.log(result);
    
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}
