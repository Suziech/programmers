function solution(binomial) {
    const split = binomial.split(' ')
    const op = split[1]
    const numbers = split.map(ele => Number(ele))

    return op === '+' ? numbers[0] + numbers[2]
    : op === '-' ? numbers[0] - numbers[2]
    : numbers[0] * numbers[2]

}