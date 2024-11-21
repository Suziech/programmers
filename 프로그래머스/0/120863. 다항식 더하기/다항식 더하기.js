function solution(polynomial) {
    const terms = polynomial.split(" + ");
    let NumX = 0;
    let constant = 0;
    
    terms.forEach(term => {
        if(term.includes('x')){
            let coefficient = term.replace("x","");
            NumX += coefficient === "" ? 1 : parseInt(term)
        } else {
            constant += parseInt(term)
        }
    })
    let result = [];
    if(NumX !== 0){
        result.push(NumX === 1 ? 'x' : `${NumX}x`)  
    }
    if(constant !== 0){
        result.push(`${constant}`)
    }
    return result.join(' + ')
}