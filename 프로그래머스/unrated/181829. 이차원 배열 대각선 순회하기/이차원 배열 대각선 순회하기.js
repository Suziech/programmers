const solution = (board, k) => 
    board.map((e,i) => e.map((el,j) => i+j <= k ? el : 0).reduce((acc,cur) => acc+cur)).reduce((acc,cur) => acc+cur)