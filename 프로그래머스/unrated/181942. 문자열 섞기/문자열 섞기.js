const solution = (str1, str2) => {
    const arr = [];
    
    for(let i=0; i<(str1+str2).length/2; i++){
        arr.push(str1[i], str2[i])
    }
    return arr.join('');
}