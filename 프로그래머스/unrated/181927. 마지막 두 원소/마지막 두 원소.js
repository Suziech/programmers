const solution = num_list => {
    const lastEle = num_list[num_list.length-1];
    const lastEleMinusOne = num_list[num_list.length-2];
    
    lastEle > lastEleMinusOne ? num_list.push(lastEle - lastEleMinusOne) : num_list.push(lastEle*2);
    
    return num_list
}