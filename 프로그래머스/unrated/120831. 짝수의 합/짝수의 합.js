const solution = n => {
    result = 0;
    for(let i=1; i<n+1; i++){
    i%2 === 0 ? result+=i : null
    }
    return result;
}