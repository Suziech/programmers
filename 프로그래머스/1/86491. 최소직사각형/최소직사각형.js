function solution(sizes) {
    const newArray = sizes.map(item => item[0] > item[1] ? item : [item[1] , item[0]])

    const firstMaxNum = Math.max(...newArray.map(item => item[0]));
    const secondMaxNum = Math.max(...newArray.map(item => item[1]));

    return firstMaxNum * secondMaxNum
}