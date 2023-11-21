function solution(myString, pat) {
        let reversedString = [...myString].reverse().join('');
        let reversedPat = [...pat].reverse().join('')
        let index = reversedString.indexOf(reversedPat)
        let result = reversedString.slice(index)
        return [...result].reverse().join('')
}