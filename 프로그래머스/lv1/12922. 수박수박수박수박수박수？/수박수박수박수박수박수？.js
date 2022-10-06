const solution = n => {
    let result = "";
    for(let i=1; i<(n+1); i++){
    result += (i%2) ? "수" : "박"
    }
    return result;
}

