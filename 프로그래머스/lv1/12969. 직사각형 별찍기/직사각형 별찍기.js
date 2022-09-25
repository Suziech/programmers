process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); // split the data and make an array
    const a = Number(n[0]), b = Number(n[1]); // a = int first one from the array and b = int is the second one from the array
    
    console.log(`${'*'.repeat(a)}\n`.repeat(b));
});