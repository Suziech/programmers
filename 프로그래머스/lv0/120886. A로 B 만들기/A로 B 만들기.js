const solution = (before, after) => {
    const func = a => a.split('').sort().join('');
    return func(before) === func(after) ? 1 : 0
}