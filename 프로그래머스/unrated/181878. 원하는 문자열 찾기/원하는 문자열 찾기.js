function solution(myString, pat) {
    const m = myString.toLowerCase();
    const p = pat.toLowerCase();

    return m.includes(p) ? 1 : 0
}