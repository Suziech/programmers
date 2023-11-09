function solution(my_string, s, e) {
    const stringArray = [...my_string];
    const reversedPortion = stringArray.slice(s,e+1).reverse();
    stringArray.splice(s, e-s+1, ...reversedPortion);
    return stringArray.join('')
}