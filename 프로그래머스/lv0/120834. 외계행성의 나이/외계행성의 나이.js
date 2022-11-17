const solution = age => {
    const alphabet = 'abcdefghij'
    return String(age).split('').map(item => alphabet[item]).join('')
} 