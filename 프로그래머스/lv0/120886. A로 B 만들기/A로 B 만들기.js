const solution = (before, after) => {
    const func = a => a.split('').sort().join('');
    return func(before) === func(after) ? 1 : 0
}

// before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0