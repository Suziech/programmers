const solution = n => {
    let result = "";
for(let i=1; i<(n+1); i++){
    if(i%2){
        result += "수"
    } else{
        result += "박"
    }
}
    return result;
}