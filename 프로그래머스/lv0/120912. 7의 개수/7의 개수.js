const solution = array => array.map(String).reduce((cur, acc) => cur+acc).split('').filter(num => num === '7').length;
