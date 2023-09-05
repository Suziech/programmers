const solution = myString => {
    const regexPatternx = new RegExp('[a-lA-L]','g')
    return myString.replaceAll(regexPatternx,'l');
}