const solution = (inStrs, k, s, l) => inStrs.map(item => Number(item.slice(s,s+l))).filter(ele => ele > k)