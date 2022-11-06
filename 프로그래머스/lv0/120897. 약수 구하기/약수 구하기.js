const solution = n => {
    const result = [];
    for(let i=1; i<=n; i++){
        n%i===0 && result.push(i)
    }
    return result
}