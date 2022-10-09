const solution = num_list => {
    const result = [];
    while(0<num_list.length){
        result.push(num_list.pop())
    }
    return result;
}