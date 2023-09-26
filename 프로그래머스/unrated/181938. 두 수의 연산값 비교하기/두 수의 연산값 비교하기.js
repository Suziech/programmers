function solution(a, b) {
    const string = Number(String(a) + String(b));
    const number = 2*a*b;

    return string >= number ? string : number;
}