const solution = (n) => {
 const oddNum = [];
for(let i=1; i<=n; i++){
    i%2 && oddNum.push(i)
}
    return oddNum;
}
