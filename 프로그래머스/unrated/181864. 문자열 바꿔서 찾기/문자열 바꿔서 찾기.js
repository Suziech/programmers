const solution = (myString, pat) => myString.split('').map(word => word === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0