const solution = (s1, s2) => {
    const result = [];
    for(let i=0; i<s2.length; i++){
        result.push(s1.filter(ele => ele === s2[i]))
    }
    return result.flat().length;
}