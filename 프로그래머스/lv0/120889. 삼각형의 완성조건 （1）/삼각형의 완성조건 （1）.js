const solution = sides => {
    const sortedNum = sides.sort((a,b) => a-b);
    return sortedNum[2] < sortedNum[0]+sortedNum[1] ? 1 : 2
}