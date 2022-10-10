const solution = num_list => {
const result = [];
    result.push(num_list.filter(ele=>ele%2===0).length)
    result.push(num_list.filter(ele=>ele%2).length)
    return result;
}