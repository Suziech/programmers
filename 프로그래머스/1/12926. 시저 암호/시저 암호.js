function solution(s, n) {
    return s.split('').map(char => {
        if(char === ' ') return char;
        
        let isUpper = char >= 'A' && char <= 'Z';
        let isLower = char >= 'a' && char <= 'z';
        let startCode = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        
        if(isUpper || isLower) {
            return String.fromCharCode((char.charCodeAt(0) - startCode + n) % 26 + startCode);
        }
        return char
    }).join('')
}