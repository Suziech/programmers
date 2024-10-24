const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // console.log(`a = ${Number(input[0])}`  `b=${Number(input[1])`);
    const text = ['a', 'b']
    for(let i=0; i<input.length; i++){
        console.log(`${text[i]} = ${input[i]}`)
    }
});